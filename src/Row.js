import React, { useState, useEffect} from "react";
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row(props) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');


  const fetchData = async () => {
    const apiCall = await fetch(props.request);
    const dataResponse = await apiCall.json();
    //console.log(data);
    setMovies(()=>{ 
      return dataResponse.results
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(movies);

  const opts = {
    height: '390px',
    width: '100%',
    playerVars:{
      //,
      autoplay: 1,
    }
  };


  const handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl('')
    }
    else{
      movieTrailer(movie?.name || "")
      .then(url=> {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((err)=>{
        console.log(`An Error Ocurred: ${err}`)
      })
    }
    //NOTE THAT MOVIETRAILER() IS A PREMADE FUNCTIONALITY THAT TAKES IN A TRAILER URL AND SIMPLY FETCHES THE VIDEO
  }

  return (
    <>
      <div className="row-container-div">
        <h1 className="header">{props.title}</h1>
      <div className="row-main">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src = {`${imageBaseUrl}${movie.poster_path}`}
            onClick = {()=>{handleClick(movie)}}
            className = {`movie-card`}
            alt={movie.name}
          />
        ))}
      </div>
      </div>
      {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />}
      {/*NOTE THAT YOUTUBE AS A COMPONENT, COMES WITH THE REACT-YOUTUBE DEPENDENCY I INSTALLED. IT IS A PREMADE COMPONENT*/}
    </>
  );
}

export default Row;
