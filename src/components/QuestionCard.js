import React from 'react';

function QuestionCard({shuffledAnswers,index,onChange}){
    return (
        <ol style={{listStyleType: 'lower-alpha'}}>
            {shuffledAnswers[index].map((item,num) => {
                return (
                <li  
                    forhtml={num} 
                    key={num} 
                    onChange={onChange}>
                    <input type="radio"  id={num} name={index} value={item}/> 
                    {item}
                </li>)
            })}
        </ol>
    )
}

export default QuestionCard;