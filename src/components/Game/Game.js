import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';

function Game() {
  const [ answer, setAnswer ] = React.useState(sample(WORDS))
  console.info({ answer });
  const [ guess, setGuess ] = React.useState("")
  const [ guesses, setGuesses ] = React.useState([])
  const [ guessCount, setGuessCount ] = React.useState(0)
  const [ state, setState ] = React.useState('playing')
  return <>
    <button onClick={() => {
      setAnswer(sample(WORDS))
      setGuess('')
      setGuesses([])
      setState('playing')
      setGuessCount(0)
    }}>Restart</button>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput guess={guess} setGuess={setGuess} submitGuess={() => {
      if (state === 'playing' && guesses.indexOf(guess) === -1) {
        console.log({ guess })
        setGuesses([...guesses, guess])
        setGuess('')
        setGuessCount(guessCount + 1)
      }
      if (guess === answer) {
        setState('won')
      } else if (guessCount > 3) {
        setState('lost')
      }
    }} />
    {state === 'won' ? <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guessCount} guess{guessCount > 1 ? 'es': ''}</strong>.
      </p>
    </div> : state === 'lost' ? <div className="sad banner" >
      <p>
        <strong>Bummer!</strong> You lost.
      </p>
    </div> : <></>}
  </>;
}

export default Game;
