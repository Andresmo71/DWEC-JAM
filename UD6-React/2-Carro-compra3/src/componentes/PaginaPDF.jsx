import MyDocument from "./VistaPdf";
import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


const PaginaPdf=()=>{

    return(
        <div>
            <h2>Visualizar y Descargar PDF</h2>


          <PDFViewer>
            <MyDocument />
          </PDFViewer>

          
          <br></br>


            <PDFDownloadLink 
            document={<MyDocument />} 
            fileName="Documento.pdf"
            >
            {({ loading }) => 
                loading ? (
                <p disabled>Cargando documento...</p>
                ) : (
                <button style={estiloBoton}>Descargar PDF</button>
                )
            }
            </PDFDownloadLink>
        </div>
    )

}

const estiloBoton = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};


export default PaginaPdf;