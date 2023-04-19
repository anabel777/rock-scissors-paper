import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import StartingPage from './components/StartingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import GamePage from './components/GamePage';
import {Routes ,BrowserRouter as Router,Route} from 'react-router-dom';
import MostPopularGames from './components/MostPopularGames';
import MoreGames from './components/MoreGames';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/GamePage' Component={GamePage} />
        </Routes>

        <Routes>
          <Route path='/HomePage' Component={StartingPage} />
        </Routes>

        <Routes>
          <Route path='/MostPopularGames' Component={MostPopularGames} />
        </Routes>

        <Routes>
          <Route path='/MoreGames' Component={MoreGames} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
