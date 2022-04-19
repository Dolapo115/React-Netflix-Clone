import React from "react";
import requests from "./requests";
import "./CSS/app.css";
import Row from "./Row";
import Banner from './Banner';
import Nav from './Nav'

function App() {

  return (
    <div className="app-main">
      <Nav />
      
      <Banner request={requests.fetchNetflixOriginals} />

      <Row
        request={requests.fetchNetflixOriginals}
        title={"netflix originals"}
      />
      <Row request={requests.fetchTopRated} title={"top rated"} />
      <Row request={requests.fetchActionMovies} title={"action movies"} />
      <Row request={requests.fetchHorrorMovies} title={"horror movies"} />
      <Row request={requests.fetchComedyMovies} title={"comedy movies"} />
      <Row request={requests.fetchRomanceMovies} title={"romance movies"} />
      <Row request={requests.fetchTrending} title={"trending"} />
    </div>
  );
}

export default App;
