import React from 'react';
import './style.css';
import AddProduct from '../AddProduct';

const ManageProducts = () => {
    return (
        <div className='manage-products'>
            <div className='james-title'>
                <h1>Manage Your Produtcs</h1>
                <p>
                    {'->'}Create, update, delete and alter all your products
                    here
                </p>
            </div>
            <div className='panel'></div>
            <div className='content'>
                <AddProduct />
            </div>
        </div>
    );
};

export default ManageProducts;
