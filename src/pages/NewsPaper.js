import { hot }  from 'react-hot-loader';
import React, { useState } from "react";
//import './registration.css'
var cors = require('cors');
// import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import samplePDF from "./sample.pdf";

function NewsPaper(){
    
	const [image, setImage] = useState({ preview: '', file: '' })
	// const [status, setStatus] = useState('')
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  
    
	const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
    }

	const handleSubmit = async (e) => {
	//   e.preventDefault()
	  
	}

    const onDocumentLoadSuccess  = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
      }

      const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      const previousPage = () => {
        changePage(-1);
      }
    
      const nextPage = () => {
        changePage(1);
      }
    
    // const { pdf } = props;
	
	return (
		  <div className="form">
                <div className="form-body">
                    <div className="footer">
                    <h1>Welcome</h1>
                
                        <Document
                            // file={samplePDF}
                            file={`data:application/pdf;base64,${samplePDF}`}
                            options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                            <div>
                                <p>
                                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                                </p>
                                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                                Previous
                                </button>
                                <button
                                type="button"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                                >
                                Next
                                </button>
                            </div>
                    </div>
                </div>
            </div>   
	  )
}

export default hot(module)(NewsPaper);

