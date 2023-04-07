import React from "react";

function GuessResults({ guesses, answer }) {
  const blank = "     "
  const blanks = [blank, blank, blank, blank, blank]
  return <div className="guess-results">
    {guesses.map((guess, guessIndex) =>
      <p className="guess" key={guessIndex}>
        {guess.split('').map((letter, letterIndex) =>
          <span className={"cell " + (letter === answer[letterIndex] ?
            "correct" : answer.indexOf(letter) !== -1 ? "misplaced" : "incorrect")} key={letterIndex}>{letter}</span>)
        }
      </p>)
    }
    {blanks.slice(guesses.length).map((blank, blankIndex) =>
      <p className="guess" key={blankIndex}>
        {blank.split('').map((blank, blankIndex) =>
          <span className="cell" key={blankIndex}> </span>
        )}
      </p>
    )}
  </div>;
}

export default GuessResults;
