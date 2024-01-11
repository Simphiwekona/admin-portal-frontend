import React from 'react'
import ProductsModal from '../components/modals/ProductsModal';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <Navbar />
            <nav class="navbar bg-body-tertiary mb-5">
                <div className="container-fluid">
                    <div>
                        <span className="navbar-brand mb-0 h1">Products</span>
                    </div>
                    <div class="d-flex justify-content-end">
                        <ProductsModal />
                    </div>
                </div>
            </nav>

            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Modal</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Product;