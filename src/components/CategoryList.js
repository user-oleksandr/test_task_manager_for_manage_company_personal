import React from 'react';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    return (
        <div>
            <h1>Categories</h1>
            <Link to="/tasks">More</Link>
        </div>
    );
};

export default CategoryList;
