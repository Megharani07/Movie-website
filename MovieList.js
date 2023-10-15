import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
                    
        <h2 className="movie__title">{movie.title}</h2>
      
				</div>
			))}
		</>
	);
};

export default MovieList;