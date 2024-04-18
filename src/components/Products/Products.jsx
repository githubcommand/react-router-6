import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                <li>
                    <Link to ="/products/1" >Product1</Link>
                </li>
                <li>
                    <Link to ="/products/2" >Product2</Link>
                </li>
                <li>
                    <Link to ="/products/3" >Product3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Products;
