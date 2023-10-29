import React, { useEffect, useState } from 'react';
import SingleMovies from '../../SingleMovies/SingleMovies';

const Home = ({handleWatchTime}) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
   fetch("data.json")
   .then((res) => res.json())
   .then(data =>setMovies(data))
      
  
  }, []); 




    return (
         <div>
           <div className="movie-container grid lg:grid-cols-3 gap-5">
            {
              movies.map((movie) => <SingleMovies handleWatchTime={handleWatchTime} movie={movie}></SingleMovies>)
            }
          </div>
         </div>
    );
};

export default Home;