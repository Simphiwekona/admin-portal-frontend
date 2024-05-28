import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


function QuotaList() {
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    const openForm = () => {
        navigate('/quotationForm')
    }

    return (
        <div className="container">
            <div className="header-section">
                <h2>Quotation</h2>
            </div>
            <div className="body-section">
                <button className="primary-btn" onClick={openForm}>Add New</button>
                {loading ? (
                    <l-ripples
                        size="45"
                        speed="2"
                        color="black"
                    ></l-ripples>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Date Created</th>
                                <th scope="col">Client</th>
                                <th scope="col">Quote Number</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>23/05/2024</td>
                            <td>Simphiwe</td>
                            <td>QU1234567889</td>
                            <td>1234567890</td>
                            <td>Active</td>
                            <td>
                                <button>

                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )

}

export default QuotaList;
