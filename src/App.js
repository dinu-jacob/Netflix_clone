import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals,trending,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url ={originals} title = 'Netflix Originals' isSmall/>
      <RowPost url ={trending} title = 'Trending'/>
      <RowPost url ={ComedyMovies} title = 'Comedy Movies'/>
      <RowPost url ={HorrorMovies} title = 'Horror Movies'/>
      <RowPost url ={RomanceMovies} title = 'Romance Movies'/>
      <RowPost url ={Documentaries} title = 'Documentaries'/>
      <RowPost url ={action} title = 'Action'  />
    </div>
  );
}

export default App;
