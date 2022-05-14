import React from 'react';
import { Link } from 'react-router-dom';

const AddItemsBtn = () => {
    return (
        <div className='text-center my-3'>
            <Link to={'/additem'}>Add New Item</Link>
        </div>
    );
};

export default AddItemsBtn;