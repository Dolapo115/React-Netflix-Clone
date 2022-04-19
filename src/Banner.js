import React, {useState, useEffect} from "react";

function Banner(props) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const apiCall = await fetch(props.request);
    const dataResponse = await apiCall.json();
    //console.log(dataResponse.results);
    setMovies(()=>{
      return dataResponse.results[Math.floor(Math.random() * dataResponse.results.length)]
    })
  };

  console.log(movies)

  useEffect(() => {
    fetchData();
  }, []);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <div
      className="banner-main"
      style={{
        background: `url(${imageBaseUrl}${movies?.backdrop_path}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="title-and-desc-container">
        <h1 className="banner-title">{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className="banner-button-div">
          <button className="play" type="submit">
            play
          </button>
          <button className="my-list" type="submit">
            my list
          </button>
        </div>
        <p className="banner-description">
          {truncate(movies?.overview, 150)}
        </p>
      </div>
      <div className = 'fade-effect'></div>
    </div>
  );
}

export default Banner;
