import React, { useEffect, useState } from "react";

import "../style/allcss.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Loader from "./loader";
import { useNavigate } from "react-router";

const Movies = () => {
  const [loading, setloading] = useState(false);
  const [movies, setMovies] = useState();
  const getitem = async (req, res) => {
    try {
      setloading(true);
      const response = await axios("/api/movie/a");

      const ans = await response.data;

      setMovies(ans);

      setloading(false);
    } catch (error) {
      console.log(`fetching error ${error}`);
      setloading(false);
    }
  };
  const hindimovie = async () => {
    try {
      setloading(true);
      const response = await axios("/api/movie/a");
      const data = response.data;
      const hindimovie = data.filter((e) => e.language === "Hindi");
      setMovies(hindimovie);

      setloading(false);
    } catch (error) {
      console.log(`fetching error ${error}`);
      setloading(false);
    }
  };
  const Englishmovie = async () => {
    try {
      setloading(true);
      const response = await axios("/api/movie/a");
      const data = response.data;
      const englishmovie = data.filter((e) => e.language === "English");
      setMovies(englishmovie);
      setloading(false);
    } catch (error) {
      console.log(`fetching error ${error}`);
      setloading(false);
    }
  };

  useEffect(() => {
    getitem();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div>
            <img
              src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-delhi-theatre-festival-season-5-0-2024-8-8-t-9-1-26.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1723195717138_webshowcase1240x300.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1723121550275_clwweb.jpg"
              alt="Slide 3"
            />
          </div>
        </Slider>
      </div>
      <div className="content">
        <div className="leftcontent">
          <h2>Filter</h2>
          <div className="options">
            <div className="opt1">
              <details open>
                <summary>Languages</summary>
                <a href="/">Hindi</a>
                <a href="/">English</a>
                <a href="/">Multi Language</a>
              </details>
            </div>
            <div className="opt2">
              <details open>
                <summary>Genre</summary>
                <a href="/">Drama</a>
                <a href="/">Adventure</a>
                <a href="/">Comedy</a>
                <a href="/">Thriller</a>
                <a href="/">Animation</a>
                <a href="/">Horror</a>
              </details>
            </div>
            <div className="opt3">
              <details>
                <summary>Format</summary>
                <a href="/">2D</a>
                <a href="/">4D X 3D</a>
                <a href="/">7D</a>
              </details>
            </div>

            <button>Browse by Cinemas</button>
          </div>
        </div>
        <div className="rightcontent">
          <h2>Movies In Jaipur</h2>

          <div className="filters">
            <button onClick={hindimovie}> Hindi </button>
            <button onClick={Englishmovie}> English </button>
            <button onClick={Englishmovie}> English 7D</button>
            <button> Multi Language</button>
          </div>

          <div className="comming">
            <h2>Coming Soon</h2>
            <a href="/">Explore Upcoming Movie ▶ </a>
          </div>
          <div className={"container1"}>
            {loading && <Loader />}
            {movies &&
              movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;

const MovieCard = ({ movie }) => {
  const [moviedetail, setmoviedetail] = useState();
  const navigate = useNavigate();

  return (
    <div
      className={"card1"}
      onClick={() => {
        navigate(`/movie/${movie.movie_name}`);
      }}
    >
      <img
        src={`${movie.movie_thumbnail}`}
        alt={`${movie.movie_name} Thumbnail`}
        className={"thumbnail"}
      />
      <div className={"details"}>
        <h2 className={"title"}>{movie.movie_name}</h2>
        <p className={"text"}>
          <strong>Rating:</strong> {movie.rating}
        </p>
        <p className={"text"}>
          <strong>Duration:</strong> {movie.duration}
        </p>
        <p className={"text"}>
          <strong>Language:</strong> {movie.language}
        </p>
        <p className={"text"}>
          <strong>Cast:</strong> {movie.cast.join(", ")}
        </p>
      </div>
    </div>
  );
};
