

        // Elementos del DOM
        const memoryBoard = document.getElementById('memoryBoard');
        const movesElement = document.getElementById('moves');
        const pairsElement = document.getElementById('pairs');
        const restartBtn = document.getElementById('restartBtn');
        const hintBtn = document.getElementById('hintBtn');
        const winMessage = document.getElementById('winMessage');
        const playAgainBtn = document.getElementById('playAgainBtn');
        const winMoves = document.getElementById('winMoves');

        // Variables del juego
        let cards = [];
        let flippedCards = [];
        let matchedPairs = 0;
        let moves = 0;
        const totalPairs = 8;

        // Símbolos para las cartas
        const symbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

        // Iniciar el juego
        function startGame() {
            resetGame();
            createCards();
            renderBoard();
        }

        // Reiniciar el juego
        function resetGame() {
            cards = [];
            flippedCards = [];
            matchedPairs = 0;
            moves = 0;
            movesElement.textContent = '0';
            pairsElement.textContent = '0/8';
            memoryBoard.innerHTML = '';
            winMessage.style.display = 'none';
        }

        // Crear las cartas
        function createCards() {
            // Duplicar y mezclar los símbolos
            const cardSymbols = [...symbols, ...symbols];
            cardSymbols.sort(() => Math.random() - 0.5);
            
            // Crear array de cartas
            cards = cardSymbols.map((symbol, index) => ({
                id: index,
                symbol: symbol,
                flipped: false,
                matched: false
            }));
        }

        // Dibujar el tablero
        function renderBoard() {
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                if (card.matched) cardElement.classList.add('matched');
                if (card.flipped || card.matched) cardElement.classList.add('flipped');
                
                cardElement.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">${card.symbol}</div>
                        <div class="card-back">?</div>
                    </div>
                `;
                
                cardElement.addEventListener('click', () => flipCard(card, cardElement));
                memoryBoard.appendChild(cardElement);
            });
        }

        // Voltear una carta
        function flipCard(card, cardElement) {
            // No hacer nada si la carta ya está volteada o emparejada
            if (card.flipped || card.matched || flippedCards.length === 2) return;
            
            // Voltear la carta
            card.flipped = true;
            cardElement.classList.add('flipped');
            flippedCards.push({card, element: cardElement});
            
            // Comprobar si hay dos cartas volteadas
            if (flippedCards.length === 2) {
                moves++;
                movesElement.textContent = moves;
                
                const card1 = flippedCards[0].card;
                const card2 = flippedCards[1].card;
                
                if (card1.symbol === card2.symbol) {
                    // ¡Es una pareja!
                    setTimeout(() => {
                        card1.matched = true;
                        card2.matched = true;
                        flippedCards[0].element.classList.add('matched');
                        flippedCards[1].element.classList.add('matched');
                        flippedCards = [];
                        matchedPairs++;
                        pairsElement.textContent = `${matchedPairs}/${totalPairs}`;
                        
                        // Comprobar si el juego ha terminado
                        if (matchedPairs === totalPairs) {
                            showWinMessage();
                        }
                    }, 500);
                } else {
                    // No es una pareja, voltear de nuevo
                    setTimeout(() => {
                        card1.flipped = false;
                        card2.flipped = false;
                        flippedCards[0].element.classList.remove('flipped');
                        flippedCards[1].element.classList.remove('flipped');
                        flippedCards = [];
                    }, 1000);
                }
            }
        }

        // Mostrar mensaje de victoria
        function showWinMessage() {
            winMoves.textContent = moves;
            winMessage.style.display = 'block';
        }

        // Mostrar todas las cartas temporalmente
        function showAllCards() {
            cards.forEach(card => {
                card.flipped = true;
            });
            renderBoard();
            
            setTimeout(() => {
                cards.forEach(card => {
                    if (!card.matched) {
                        card.flipped = false;
                    }
                });
                renderBoard();
            }, 2000);
        }

        // Event Listeners
        restartBtn.addEventListener('click', startGame);
        hintBtn.addEventListener('click', showAllCards);
        playAgainBtn.addEventListener('click', startGame);

        // Iniciar el juego al cargar la página
        window.addEventListener('load', startGame);
    