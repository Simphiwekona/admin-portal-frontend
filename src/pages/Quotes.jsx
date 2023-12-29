import React from 'react'
import QuoteModel from '../components/quotation/QuoteModel';
import QuotaList from '../components/quotation/QuoteList';
import './styles/style.css'

const Quotes = () => {
    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid d-flex justify-content-end">
                    <QuoteModel />
                </div>
                <div className='col text-center'>
                    <h2 className='display-1'>Quotation</h2>
                    <small>List of all the Quotaion</small>
                </div>
            </nav>
            <div className='container'>
                <QuotaList />
            </div>
        </>
    )
}
export default Quotes;