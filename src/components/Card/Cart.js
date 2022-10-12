import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({data}) => {
    const{id,name,logo,total}=data
    return (
        <div>
           <div className="row">
            <div className="col-sm-12">
            <div  className="card cart col-sm-12 mb-5">
               <img  className="card-img-top logo" src={logo} alt="" />
                    <div  className="card-body">
                       <div className='d-flex justify-content-between'>
                       <h5  className="card-title">{name}</h5>
                        <p>Questions : {total}</p>
                       </div>
                      <div className='d-flex '>
                      <Link to={`/quize/${id}`}  className="btn btn-primary w-100">Start Quize</Link>
                      </div>
                    </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Cart;