import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));

  // Make setSelected look less messy by making a custom randominteger function here.
  const randomint = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const incrementVotes = voteIndex => {
    setVotes(() => {
      const newArr = [...votes];
      newArr[voteIndex]++;
      return newArr;
    });
  };

  return (
    <div>
      <button onClick={() => setSelected(randomint(6))}>
        Display Anecdote
      </button>
      <button onClick={() => incrementVotes(selected)}>
        Vote for this Anecdote
      </button>
      <br />
      <br />
      {props.anecdotes[selected]}
      <br /> This anecdote has {votes[selected]} votes.
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
