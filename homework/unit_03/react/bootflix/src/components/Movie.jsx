import React from "react";
import axios from 'axios';

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{this.movie.title}</h3>
        <p>
          <strong>Released:</strong> {this.props.movie.year}<br />
          <strong>Directed By:</strong> {this.props.movie.director}<br />
          <em>Genre:</em> {this.props.movie.genre}
        </p>
        <p>{this.props.movie.plot}</p>
      </div>
    </section>
  );
};

export default Movie;
