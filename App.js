import './App.css';
import { useState } from 'react';
import Question from './Question';
import Article from './Article';

function App(){
    const[selection, setSelection] =useState("");
    const onOptionChange =(e) =>{
        setSelection(e.target.value)
    }

    return (
        <div className='text'>
            <h2> New Post </h2>

            <span><strong>Select Post Type: </strong></span>
            <input type='radio' name='selection' value="question" onChange={onOptionChange}></input>
            <label>Question</label>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type='radio' name='selection' value="article" onChange={onOptionChange}></input>
            <label>Article</label>
            {}
            <h2> What do you want to ask or share</h2>

            {selection === "question"&& <Question />} 
            {selection === "article"&& <Article />}


        </div>
    
    )
}

export default App;
