import React from 'react'
// import Prevbtn from './Prevbtn';
import TotalCorrect from './TotalCorrect';
import TotalInCorrect from './TotalIncorrect';

function ScoreArea(props) {
    return (
        <div className='scorewrapper'>
            
           < TotalCorrect correct={props.correct}/>
           < TotalInCorrect Incorrect={props.Incorrect}/> 
           {/* <Prevbtn /> */}
           {/* <button className='btnBack' type='submit' >Back</button> */}
        </div>
    )
}

export default ScoreArea;
