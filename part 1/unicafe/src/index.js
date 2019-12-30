import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics= (props) => {
    const good = props.props[0]
    const neutral = props.props[1]
    const bad = props.props[2]

    if(good === 0 & neutral === 0 & bad === 0)
    {
        return (
            <div>
            <h2>Statistics</h2>
                Feedback has not been provided.
            </div>
        )
    }
    else
    {
        return (
            <div>
            <h2>Statistics</h2>
            <Statistic name='Good' value={good} />
            <Statistic name='Neutral' value={neutral} />
            <Statistic name='Bad' value={bad} />
            <Statistic name='All' value={good + neutral + bad} />
            <Statistic name='Average' value={(good - bad) / (good + bad + neutral)} />
            <Statistic name ='Positive' value={good / (good + bad + neutral) * 100} percent={true} />
            </div>
        )
    }
}

const Statistic = ({name, value, percent=false}) => {
    if(percent === true)
    {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{value}%</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    else
    {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{value}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (stat) => {
      if(stat === 'good')
      {
          setGood(good + 1)
      }
      else if (stat === 'neutral')
      {
          setNeutral(neutral + 1)
      }
      else if (stat === 'bad')
      {
          setBad(bad + 1)
      }
  }

  const Btn = ({text, vari}) => {
    if(vari === 'good')
    {
        return <button onClick={() => increment('good')}>{text}</button>;
    }
    else if(vari === 'neutral')
    {
        return <button onClick={() => increment('neutral')}>{text}</button>;
    }
    else if(vari === 'bad')
    {
        return <button onClick={() => increment('bad')}>{text}</button>;
    }
}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Btn text='Good' vari='good' />
      <Btn text='Neutral' vari='neutral' />
      <Btn text='Bad' vari='bad' />

      <Statistics props={[good, neutral, bad]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
