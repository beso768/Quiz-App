import { func } from 'prop-types';
import React from 'react';
import { useEffect,useState } from 'react'
import QuestionCard from './QuestionCard';
import Results from './Results';


function Quiz({filtereditems}){
    const [correctAnswersNum, setCorrectAnswersNum] = useState(0);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);


    function radioChange(e){
        const index = e.target.name;
        const submittedAnswer = e.target.value;
        const correctAnswer = filtereditems[index].correct_answer;
        console.log(correctAnswer,filtereditems, e.target.value);
        if(submittedAnswer === correctAnswer){
        setCorrectAnswersNum(correctAnswersNum + 1) ;
        }
    }

    useEffect(() => {
        setQuizQuestions(filtereditems.map(item => item.question))
        setShuffledAnswers(filtereditems.map(item => [item.correct_answer, ...item.incorrect_answers].sort((a, b) => 0.5 - Math.random())))
    },[filtereditems])


    function handleClick(){
        setShowResults(true);
    }

    return(
        <>
            <ol className="quiz">
                {
                    quizQuestions && quizQuestions.map((item,index) => {
                        return  (
                            <li   
                                id={index} 
                                key={index}
                                className="questionsCard"
                                >
                                <div style={{display:'flex',flexDirection:"column",marginBottom:"10px"}}>
                                    <h4>{item}</h4>
                                    <QuestionCard 
                                        shuffledAnswers={shuffledAnswers}
                                        index={index}
                                        onChange={radioChange}
                                    />
                                </div>  
                            </li>
                        )
                    })
                }
                <button className="checkButton" onClick={handleClick}>Check Answers</button>
            </ol>
            {
                showResults && <Results correctAnswersNum={correctAnswersNum} filtereditems={filtereditems} />
            }
          </>    
        
    )
}
export default Quiz;