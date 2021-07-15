export default function filter(selecteddifficulty,selectedCategory,setFiltereditems,questions) {
    if(selecteddifficulty === 'All' && selectedCategory !== 'All'){
        setFiltereditems(questions.filter(item => item.category === selectedCategory));
    }else if(selecteddifficulty === 'All' && selectedCategory === 'All'){
        setFiltereditems(questions);
    }else if(selecteddifficulty !== 'All' && selectedCategory !== 'All'){
        setFiltereditems(questions.filter(item => item.category === selectedCategory && item.difficulty === selecteddifficulty));
    }else{
        setFiltereditems(questions.filter(item => item.difficulty === selecteddifficulty));
    }
}
