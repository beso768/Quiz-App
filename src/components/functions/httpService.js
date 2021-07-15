import config from '../config.json'
const baseURL = config.baseURL;

export default function httpService(setQuestions,setFiltereditems,setUniqueCategories,setUniquedifficulties) {    
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results); 
        setFiltereditems(data.results);
        let sortedCategory = new Set(data.results.map(item => item.category)) //set unique categories in select input
        setUniqueCategories([...sortedCategory])
        let sortedDifficulty = new Set(data.results.map(item => item.difficulty))//set unique difficulties 
        setUniquedifficulties([...sortedDifficulty])
      })
}
