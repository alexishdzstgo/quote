import React, { useState } from 'react';
import quote from '../quotes.json'
import Quote from './Quote.jsx';

const QuoteBox = () => {
    
    const colors =["#90EE90", "#FFA07A", "#20B2AA", "#B0C4DE", "#FA8072", "#D87093", "#DC143C"]
    const randomColors = Math.floor(Math.random() * colors.length)

    document.body.style = `background: ${colors[randomColors]}`
    //document.body.style = `color: ${colors[randomColors]}`
    //document.querySelector(``)

    const randomIndex = Math.floor(Math.random() * quote.length)
    const [ index, setIndex] = useState(randomIndex)
    const changeQuote = () =>{
        const randomIndex = Math.floor(Math.random() * quote.length)
        setIndex(randomIndex)
    }
    return (
        <div className='quoteBox' style={{color: colors[randomColors]}}>
            <Quote quote={quote[index].quote} author= {quote[index].author}/>
            <button className='btn' onClick={changeQuote} style={{background: colors[randomColors]}}><i class="fa-solid fa-caret-right"></i></button>
        </div>
    );
};

export default QuoteBox;