import React from "react";

function GuessInput({ guess, setGuess, submitGuess }) {
  return <form className="guess-input-wrapper" onSubmit={event => {
    event.preventDefault()
    setGuess(guess)
    submitGuess()
  }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" minLength="5" maxLength="5" pattern="[A-Z]{5}" title="5 letter word" value={guess} onChange={event => {
      setGuess(event.target.value.toUpperCase().replace(/[^A-Z]/, ""))
    }} />
  </form>;
}

export default GuessInput;
