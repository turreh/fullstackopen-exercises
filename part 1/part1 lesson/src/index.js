import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    console.log('Hello from component')
    console.log('Contains code from all parts of the lesson, only few parts were deleted.')

    const now = new Date()
    const a = 10
    const b = 20
    const name = 'Jonathan'
    const age = 12
    return (
    <div>
        
        <p>Hello world, it is {now.toString()}</p>
        <p>
            {a} plus {b} is {a+b}
        </p>
        <br></br>
        <h1>Greetings</h1>
        <Hello name="Terry" age={15+5}/>
        <Hello name={name} age={age}/>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))