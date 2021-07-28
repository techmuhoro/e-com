import React, { useState } from 'react';
//import formData from "form-data";
import './style.css';
import axios from 'axios';
// import img from './img.png';
const AddProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [files, setFiles] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData();

        data.append('name', name);
        data.append('category', category);
        data.append('slug', slug);
        data.append('price', price);
        data.append('discount', discount);

        for (let file of files) {
            data.append('images', file);
        }
        axios
            .post('http://localhost:3300/upload', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div className='add-product'>
            <form onSubmit={handleSubmit}>
                <div className='james-title'>
                    <h1>Add all details about a product</h1>
                    <p>
                        &nbsp; &nbsp; {' ->'}All form fields with a * are
                        required
                    </p>
                </div>
                <div>
                    <label htmlFor='name'>
                        Product name <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <input
                        type='text'
                        value={name}
                        id={name}
                        placeholder='e.g infinix hot 10'
                        onChange={e => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <label htmlFor='category'>
                        Category <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <select
                        name='catogory'
                        value={category}
                        id='category'
                        onChange={e => {
                            setCategory(e.target.value);
                        }}
                    >
                        <option value={''}>Choose a category</option>
                        <option value={'mobile and tablets'}>
                            Mobile and Tablets
                        </option>
                        <option value={'Computer and accesories'}>
                            Computer and accesories
                        </option>
                        <option value={'Electronics'}>Electronics</option>
                        <option value={'Fashion'}>Fashion</option>
                        <option value={'Health and baeuty'}>
                            Health and baeuty
                        </option>
                        <option value={'Sporting goods'}>
                            Sporting goods{' '}
                        </option>
                        <option value={'Baby products'}>Baby products</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='slug'>
                        Slug <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <input
                        type='text'
                        id='slug'
                        value={slug}
                        placeholder='e.g infinix-hot-10-new'
                        onChange={e => {
                            setSlug(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='price'>
                        Price <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <input
                        type='text'
                        id='price'
                        value={price}
                        placeholder='price in dollars'
                        onChange={e => {
                            setPrice(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='discount'>
                        Discount <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <input
                        type='text'
                        id='discount'
                        value={discount}
                        placeholder='e.g 2'
                        onChange={e => {
                            setDiscount(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='file'>
                        Images <span style={{ color: 'red' }}>*</span>{' '}
                    </label>
                    <br />
                    <input
                        type='file'
                        id='file'
                        multiple
                        onChange={e => {
                            //console.log(e.target.files[0]);
                            setFiles(e.target.files);
                        }}
                    />
                </div>
                <button>Send</button>
            </form>
            <div className='submit-status'></div>
        </div>
    );
};

export default AddProduct;
