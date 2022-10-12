import React from 'react';
 import Companyimg from '../../../src/quiz.jpg'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Card/Cart';
import './Home.css'

const Home = () => {
    const quizData=useLoaderData();
    // console.log(quizData.data)
    const {data}=quizData
  
 
    return (
        <div>

            

            {/*---------------------------- */}
            <div className="card hrader-cart ">
  <div className="card-body d-flex align-items-center">
  <img src={Companyimg} className="card-img-top img" alt="" />
   <div>
   <h5 className=" ">All Popular Web Development Quize</h5>
    <p className=''>This quiz covers all of the topics learnt in the "Introduction to Web Development" e-learning environment. There are no trick questions and all of the answers have been given at some point in the online sessions </p>
   </div>
   
  </div>
</div>
            {/*------------------------------ */}
         <div className='Allquize-data'>
{
data.map(data=><Cart key={data.id} data={data}></Cart>)
}
        </div>
          
        </div>
    );
};

export default Home;