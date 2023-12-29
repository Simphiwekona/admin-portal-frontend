import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function QuotaList() {

    const [quotelist, setQuoteList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quoteId, setQuoteId] = useState('');
    const [generatedHtml, setGeneratedHtml] = useState('');

    const fetchData = () => {
        return fetch("http://localhost:8080/api/quotations/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network is down, Try again later');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                throw error;
            });
    };

    const handleGenerateHtml = async (quoteId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/quotations/${quoteId}`);
            const htmlContent = await response.text();
            setGeneratedHtml(htmlContent);
        } catch (error) {
            console.error('Error generating HTML:', error);
        }
    };


    const deleteUser = (userId) => {
        fetch(`http://localhost:8080/api/v1/${userId}`, { // Use backticks (`) here
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                fetchData();
            })
            .catch(error => {
                console.error('Error deleting user: ', error);
            });
    };


    useEffect(() => {
        const fetchDataAndHandleError = () => {
            fetchData()
                .then(data => setQuoteList(data))
                .catch(error => console.error('Error setting employ data:', error))
                .finally(() => setLoading(false))
        };
        fetchDataAndHandleError();

        const intervalId = setInterval(fetchDataAndHandleError, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container mt-4'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="row mt-4">
                    {quotelist.map((quoteList) => (
                        <div className="col-6 mb-3" key={quoteList.quoteId}>
                            <div className="card" style={{ width: '34rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{quoteList.customer_name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Quotation Number: QU{quoteList.quotationNumber}</h6>
                                    <p className="card-text">{quoteList.description}</p>
                                    <a href="#" className="card-link" onClick={() => handleGenerateHtml(quoteList.quoteId)}>Generate</a>
                                    <a href="#" className="card-link">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
    
            {generatedHtml && (
                <div>
                    <h2>Generated HTML:</h2>
                    <div dangerouslySetInnerHTML={{ __html: generatedHtml }} />
                </div>
            )}
        </div>
    );
    

}
export default QuotaList;