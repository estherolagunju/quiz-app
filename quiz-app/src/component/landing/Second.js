import React from 'react'


function Second() {
    return (
         <div className='container'>

        <header class="text-center text-light my-4" >
             <p className='basic'>Basic Trivia Questions</p>
        </header> 

        <form className='hmm'>
            <div class="list-group-item search mt-6 d-flex justify-content-between align-items-center"> Choose your preferred niche</div>

        </form>
        
        <div className='sections'>
             <div className='todo1' > Art and Literature</div>
             <div className='todo2' >General Knowledge</div>
             <div className='todo3'>Science and Nature</div>
             <div className='todo4'>Technology</div>


        </div>

        <button className='btnkuit'>
           Quit
        </button>
        </div>
    )
}

export default Second
