import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuezData from '../quiezData/QuezData';

const Quiz = () => {
    const idData=useLoaderData();
    const {questions,name}=idData.data
  
  

    return (
        <div>
             <h1 className='text-center mt-5 text-danger'>Start {name} Quize</h1>
            {
                questions.map(quez=><QuezData key={quez.id} quez={quez}></QuezData>)
            }
        </div>
    );
};

export default Quiz;