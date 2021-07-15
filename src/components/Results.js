import React from 'react';
import { Link } from "react-router-dom";
function Results({correctAnswersNum,filtereditems}){
    let correctAnswersArr = filtereditems.map(item => item.correct_answer)
    return(
        <>
            <div className="results">
                <h3>You have {correctAnswersNum} correct answers!</h3>
                <h2>Correct answers:</h2>
                <ol>
                    {
                        correctAnswersArr.map((answer,index) => <li key={index}>{answer}</li>)
                    }
                </ol>
                <Link  className="checkButton" to="/">Try Again</Link>
            </div>
        </>
    )
}
export default Results;