import React from 'react';

const Quizeotion = ({ option,handleClick,quez }) => {
    return (
        <div>
            <label onClick={()=>handleClick(option)}>
                <input type="radio"  className='mx-2'/>{option}
            </label>
        </div>
    );
};

export default Quizeotion;