import React from 'react';
import {useState,useEffect } from "react" 
import { Link } from "react-router-dom";
import filter from './functions/filter';
import SelectInput from './SelectInput';


function Form({uniqueCategories,uniquedifficulties,questions,setFiltereditems,filtereditems,setstartQuiz,history}) {
    const [selectedCategory, setselectedCategory] = useState('All');
    const [selecteddifficulty, setSelecteddifficulty] = useState('All');

    function handleCategory({target}){
        setselectedCategory(target.value);
    }
    function handledifficulty({target}){
        setSelecteddifficulty(target.value); 
    }
    useEffect(() => {
        if(questions.length > 0){
            filter(selecteddifficulty,selectedCategory,setFiltereditems,questions);
        }
    }, [selectedCategory,selecteddifficulty]);
    return(
        <div className="filterForm">
            <h2>Total questions {filtereditems.length} </h2>
            <div className="selectWrapper">
                <SelectInput 
                    label="trivia-categories" 
                    onChange={handleCategory} 
                    value={selectedCategory}
                    uniqueItems={uniqueCategories} />
                <SelectInput 
                    label="trivia-difficulty" 
                    onChange={handledifficulty} 
                    value={selecteddifficulty} 
                    uniqueItems={uniquedifficulties} />
                </div>
            <Link className="checkButton" to="/quiz">Start Quizz</Link>
        </div>
    )
}
export default Form;