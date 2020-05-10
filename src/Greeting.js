import React from 'react';
import './Greeting.css';
const Greeting=({name,age=18,excitementNo=1})=>{
    const greet=()=>{
        alert(`hai buddy ${name}`);
    }
    return(
        <div className="greeting">
            <h2>Hai {name} {"!".repeat(excitementNo)}</h2>
            <h5> You are {age} years old.</h5>
            <button onClick={greet}> greet me</button>

        </div>
    )

}
export default Greeting;
