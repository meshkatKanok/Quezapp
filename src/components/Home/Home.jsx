import React from 'react';
 import Companyimg from '../../../src/quiz.jpg'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Card/Cart';
import './Home.css'

const Home = () => {
    const quizData=useLoaderData();
    // console.log(quizData.data)
    const {data}=quizData
    console.log(data);
 
    return (
        <div>

            

            {/*---------------------------- */}
            <div class="card hrader-cart">
 <img src={Companyimg} class="card-img-top img" alt="" />
  <div class="card-body">
    <h5 class="card-title text-center">All Popular Web Development Quize</h5>
    {/* <h1 className='text-center mt-5'>All Popular Web Development Quize</h1> */}
    <p className='text-center w-75 m-auto'>This quiz covers all of the topics learnt in the "Introduction to Web Development" e-learning environment. There are no trick questions and all of the answers have been given at some point in the online sessions </p>
   
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