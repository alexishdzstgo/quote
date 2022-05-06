import React from 'react';

const Quote = ({quote, author}) => {
    return (
        <div>
            
            <div className='quote' ><i class="fa-solid fa-quote-left"></i>{quote}<i class="fa-solid fa-quote-right"></i></div>
            <div className='author' >{author}</div>
        </div>
    );
};

export default Quote;