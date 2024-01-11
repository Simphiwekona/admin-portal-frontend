import React from 'react';
import ProductsModal from '../components/modals/ProductsModal';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const Product = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProductData = () => {
        return fetch("http://localhost:8080/api/products/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network is down, try again later');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                throw error;
            });
    };

    useEffect(() => {
        const fetchDataAndHandleError = () => {
            fetchProductData()
                .then(data => setProductData(data))
                .catch(error => console.error('Error setting products data: ', error))
                .finally(() => setLoading(false));
        };
        fetchDataAndHandleError();

        const intervaild = setInterval(fetchDataAndHandleError, 1000);
        return () => clearInterval(intervaild);
    }, []);

    return (
        <>
            <Navbar />
            <nav className="navbar bg-body-tertiary mb-5">
                <div className="container-fluid">
                    <div>
                        <span className="navbar-brand mb-0 h1">Products</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <ProductsModal />
                    </div>
                </div>
            </nav>

            <div className="container">
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Model</th>
                                <th scope="col">Category</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData.map((product, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.product}</td>
                                    <td>{product.model}</td>
                                    <td>{product.category}</td>
                                    <td>{product.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Product;
