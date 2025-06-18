import React from "react";

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"90%"}}/>
                </div>
                <div className='col-6 mt-4'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='text-muted mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity&rarr;</a>
                    <p className='text-muted mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A&rarr;</a>
                </div>
            </div>
        </div>
     );
}

export default Education;