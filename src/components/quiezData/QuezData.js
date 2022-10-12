import React from 'react';
import Quizeotion from '../Quizoption/Quizeotion';
import './QuezData.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const QuezData = ({quez}) => {
    const {question,options,correctAnswer}=quez
    const handleClick=(option)=>{
        if(option===`${correctAnswer}`){
            toast(`Correct Answer`,{
                position:"top-center"
            });

        }
        else{
            toast(`worng Answer`,{
                position:'top-center'
            })
        }
    }
    return (
        <div>
            <div className="card quize-data m-auto mt-5 bg-black text-warning">
                <p>{question}</p>
                <div className="card-body text-primary">
                    {
                        options.map((option,index)=><Quizeotion quez={quez} key={index} handleClick={handleClick} option={option}></Quizeotion>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuezData;