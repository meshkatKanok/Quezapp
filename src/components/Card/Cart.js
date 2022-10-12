import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({data}) => {
    const{id,name,logo}=data
    return (
        <div>
            <div  className="card cart  mb-5">
               <img  className="card-img-top logo" src={logo} alt="" />
                    <div  className="card-body d-flex justify-content-between">
                        <h5  className="card-title">{name}</h5>
                        <Link to={`/quize/${id}`}  className="btn btn-primary">Start Quize</Link>
                    </div>
            </div>
        </div>
    );
};

export default Cart;