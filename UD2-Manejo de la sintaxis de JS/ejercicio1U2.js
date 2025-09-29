
let abrirVentana = () => {
   let ventana =  window.open("https://as.com/", "Mensaje", "width=300,height=150");
   ventana.document.write(`
      <html>
          <body style="text-align:center; padding:20px;">
              <h3>"Hola, te estoy observando"</h3>              
          </body>
      </html>
  `)   
}


setTimeout(abrirVentana, 3000);

 

