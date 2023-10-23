import './App.css';
import React, { useEffect, useState } from 'react';
import StarField from './Starfield';

function App() {
  const [joke, setJoke] = useState('lol');
  const [punchline, setPunchline] = useState('I hope');
  const url = 'https://official-joke-api.appspot.com/random_joke';
  useEffect(() => {
    document.title = 'Cosmic Comedy';
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      const newJokeButton = document.querySelector('.newJoke');
      const newJokebgButton = document.querySelector('.newjokebg');
      newJokeButton.classList.add('spin-animation');
      newJokebgButton.classList.add('spin-animation');
      setTimeout(() => {
        newJokeButton.classList.remove('spin-animation');
        newJokebgButton.classList.remove('spin-animation');
      }, 1000);

      setPunchline();
      setJoke(jsonResponse.setup);

      const revealPunchline = () => {
        setTimeout(() => {
          setPunchline(jsonResponse.punchline);
        }, 3500);
      };
      revealPunchline();
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }

  return (
    <div className="App">
      <div className='bg'>
        <h1 className='logo'>Cosmic Comedy</h1>
        <div className='jokebg'></div>
        <h1 className='joke'>{joke}</h1>
        <div className='newjokebg'></div>
        <h1 className='newJoke' onClick={fetchData}>Next Joke</h1>
        <div className='hitmebg'></div>
        <div className='hitme'></div>
        <div className='punchlinebg'></div>
        <h1 className='punchline'>{punchline}</h1>
        <StarField />
      </div>
    </div>
  );
}

export default App;
