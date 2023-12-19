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
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Customer Name</th>
                            <th scope='col'>Contact Number</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Quote Number</th>
                            <th scope='col'>Quote Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quotelist.map((quoteList) => (
                            <tr key={quoteList.quoteId}>
                                <td>{quoteList.quoteId}</td>
                                <td>{quoteList.customer_name}</td>
                                <td>{quoteList.contact_number}</td>
                                <td>{quoteList.email}</td>
                                <td>{quoteList.description}</td>
                                <td>QU{quoteList.quotationNumber}</td>
                                <td>{quoteList.quote_date}</td>
                                {/* Other table data */}
                                <td>
                                    <Button
                                        variant='success'
                                        onClick={() => handleGenerateHtml(quoteList.quoteId)}
                                    >
                                        Generate
                                    </Button>
                                </td>
                                <td>
                                    <Button variant='primary'>
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {generatedHtml && (
                        <div>
                            <h2>Generated HTML:</h2>
                            <div dangerouslySetInnerHTML={{ __html: generatedHtml }} />
                        </div>
                    )}
                </table>

            )
            }
        </div>
    )

}
export default QuotaList;