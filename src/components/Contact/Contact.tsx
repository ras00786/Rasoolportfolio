import React, { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs';
import pdf from '../../assets/rasool 2024.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume: React.FC = () => {
    const [wid, setWid] = useState<number>(window.innerWidth);
    const [numPages, setNumPages] = useState<number | null>(null);

    const handleResize = () => {
        setWid(window.innerWidth);
    };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    useEffect(() => {
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderPages = () => {
        const pages: JSX.Element[] = [];
        if (numPages) {
            for (let i = 1; i <= numPages; i++) {
                pages.push(
                    <Page key={i} pageNumber={i} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
                );
            }
        }
        return pages;
    };

    return (
        <div className='ResumePage'>
            <Document file={pdf} className="resumeview" onLoadSuccess={onDocumentLoadSuccess}>
                {renderPages()}
            </Document>

            <a href={pdf} target='_blank' download="Sai kumar's Resume" rel="noreferrer">
                <button className='downloadCV' type='button'>
                    <h3><BsDownload />&nbsp; Download CV</h3>
                </button>
            </a>
        </div>
    );
};

export default Resume;
