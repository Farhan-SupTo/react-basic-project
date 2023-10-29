import React from 'react';

const SingleMovies = ({movie, handleWatchTime}) => {
    console.log(movie)
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={movie.poster} alt="Shoes" className="rounded-xl w-2/4" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title font-bold text-center">{movie.movieName}</h2>
          <p className='text-center'>{movie.description}</p>
          <div className='flex gap-16'>
            <p>WatchTime:{movie.watchTime}</p>
            <p>Ratings:{movie.imdbRating}</p>
          </div>
            <button onClick={() => handleWatchTime(movie.watchTime)} className='btn-info w-4/5 h-12 rounded-md'>Book Now</button>
        </div>
      </div>
    );
};

export default SingleMovies;