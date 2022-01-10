import React from 'react'
import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

function ProductList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Things I've Developed</h1>
                <p className="pl-desc">
                 Here is some Demo Project That I have developed While I Was Learning HTML, CSS, JS, NODE, REACT, BOOTSTRAP, MONGODB...
                </p>
            </div>
            <div className="pl-list">
                
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={ item.link}/>
                ))}
                
               
            </div>
        </div>
    )
}

export default ProductList
