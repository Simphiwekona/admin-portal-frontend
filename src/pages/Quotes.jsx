import React from 'react'
import QuoteModel from '../components/quotation/QuoteModel';
import QuotaList from '../components/quotation/QuoteList';
import './styles/style.css'
import Navbar from '../components/Navbar';
import SideBar from '../components/navigation/Sidebar';

const Quotes = () => {
    return (
        <>
        <SideBar />
            <nav class="navbar">
                <div class="container-fluid d-flex justify-content-end">
                    <QuoteModel />
                </div>
            </nav>
                <div className='col text-center'>
                    <h2 className='display-1'>Quotation</h2>
                    <small>List of all the Quotaion</small>
                </div>
            <div className='container'>
                <QuotaList />
            </div>
        </>
    )
}
export default Quotes;