import React, { Component } from 'react'
import dataSet from '../api/dataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';
import TotalCorrect from './TotalCorrect';
// import images from './mark.png';

 class Questionaire extends Component {

    constructor(){
        super();
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            Incorrect: 0,
            IsFinished: false,
            question:0
            
        }
        
        
        this.handleClick = this.handleClick.bind(this);
            
    }
    // if(props.IsFinished) {
    //     return <UserGreeting />
handleClick(choice) {
    if(choice === this.state.dataSet[this.state.current].correct) {
        this.setState({correct: this.state.correct + 1})
    } else {
       this.setState({Incorrect: this.state.Incorrect + 1})
    }

    if(this.state.current === this.state.dataSet.length - 1) {
        this.setState({IsFinished:true })
    } else{
        this.setState({ current: this.state.current + 1 })
    }
     

}

reset() {
    this.setState({IsFinished:false })
    this.setState({Incorrect:0 })
    this.setState({correct:0 })
    this.setState({current:0 })
    // if(choice === this.state.dataSet[this.state.current].correct) {
    //     this.setState({correct: this.state.correct + 1})
    // } else {
    //    this.setState({Incorrect: this.state.Incorrect + 1})
    // }

    // if(this.state.current === this.state.dataSet.length - 1) {
    //     this.setState({IsFinished:true })
    // } else{
    //     this.setState({ current: this.state.current + 1 })
    // }

}

    render() {
        return (
            <div>
               {/* {console.log(this.state.IsFinished)}
                {this.state.IsFinished ?
                <>
                    <div>
                        <section className="sticky">
                            <div className="bubbles">
                            <div className="bubble"></div>
                            <div  className="bubble"></div>
                            <div  className="bubble"></div>
                            <div className="bubble"></div>
                            <div  className="bubble"></div>
                            <div  className="bubble"></div>
                            <div  className="bubble"></div>
                            <div  className="bubble"></div>
                            <div  className="bubble"></div>
                            <div className="bubble"></div>
                            
                            </div>
                        </section>
                            <h2 className='usergreeting'>Thank you for completing the Questions!</h2>
                            <button onClick={()=>{this.reset()}}>
                                Click me!
                            </button>
                    </div>
                </>
                : */}
                {/* <> */}
                    <h5 className='count'> Question {this.state.current + 1} of {dataSet.length} </h5>
                    <QuizArea handleClick={this.handleClick} IsFinished={this.state.IsFinished} 
                    dataSet={this.state.dataSet[this.state.current]}/>

                    {this.state.IsFinished ?
                    <>
        
                     <TotalCorrect correct={this.state.correct}/>
                    <button className='backbtn' onClick={()=>{this.reset()}}>
                    Back
                </button>
               
                </>
                   : 
                   <ScoreArea correct={this.state.correct} Incorrect={this.state.Incorrect}/> 

                }
            </div>

        )
    }
   
}

export default Questionaire;

