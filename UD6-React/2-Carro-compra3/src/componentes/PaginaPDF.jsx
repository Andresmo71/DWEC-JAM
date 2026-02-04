import MyDocument from "./VistaPdf";
import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import '../estilos/pdf.css'; // ¡No olvides importar el CSS!

const PaginaPdf = () => {
    return (
        <div className="pdf-page-container">
            <h2>Visualizar y Descargar PDF</h2>

            <PDFViewer className="pdf-viewer-style">
                <MyDocument />
            </PDFViewer>

            <br />

            <PDFDownloadLink 
                document={<MyDocument />} 
                fileName="Documento.pdf"
                style={{ textDecoration: 'none' }} // Elimina subrayado del link
            >
                {({ loading }) => 
                    loading ? (
                        <p className="loading-text">Generando archivo...</p>
                    ) : (
                        <button className="pdf-download-btn">Descargar PDF</button>
                    )
                }
            </PDFDownloadLink>
        </div>
    );
};

export default PaginaPdf;