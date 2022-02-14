import React from 'react'

function UserGreeting(props) {
  // const {reset}= props
  console.log(props.reset())
    return (
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
            <button onClick={()=>{props.reset()}}>
                Click me!
            </button>
       </div>
        
        
    )
}

export default UserGreeting;
