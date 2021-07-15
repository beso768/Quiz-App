import React from 'react';
import { useEffect,useState } from "react"
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Form from './components/Form'
import Quiz from './components/Quiz';
import httpService from './components/functions/httpService';
import NotFound from './components/NotFound';
import './style.css'

function App() {
  const [questions, setQuestions] = useState([]);
  const [filtereditems, setFiltereditems] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]); //unique category items
  const [uniquedifficulties, setUniquedifficulties] = useState([]);//uniqeu difficulty items
  const [startQuiz, setstartQuiz] = useState(false);

  
  useEffect(() => {
    httpService(setQuestions,setFiltereditems,setUniqueCategories,setUniquedifficulties) //get data from server
  }, []);

  return (
    <>
      <Switch>
        <Route path="/quiz">
          <Quiz filtereditems={filtereditems} />
        </Route>
        <Route exact path="/">
          <Form 
            uniqueCategories={uniqueCategories} 
            uniquedifficulties={uniquedifficulties} 
            questions={questions}
            filtereditems={filtereditems}
            setFiltereditems={setFiltereditems}
            setstartQuiz={setstartQuiz}
            history={useHistory}
          />
        </Route>
        <Route to="/not-found">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
