import React from 'react'
import Question from "./Question";
import AnswerList from './AnswerList';
import images  from'./images/mark.png';

// import UserGreeting from './UserGreeting';

function QuizArea(props) {
    // if(props.IsFinished) {
    //     return <UserGreeting />
    // }
    return (

        <div className='quizArea'>
            <h1 style={{marginBottom: "5rem"}}>Welcome! This is Basic Trivia Quiz.   </h1>
            {props.IsFinished ?
            <>
             <h2 className='usergreeting'>Thank you for completing the Questions!</h2>
             <img src= {images} alt="" style={{ width:200, height:200}} />
            
            </>   
        :
        <>  
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </>
        }
        </div>
    )
}

export default QuizArea;
