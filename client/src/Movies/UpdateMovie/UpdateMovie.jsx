import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './UpdateMovie.styles';
import axios from 'axios';
import { useState } from 'react';

const UpdateMovie = props => {
	console.log('UpdateMovie: ', props);
	const url = `http://localhost:5000/api/movies/${props.match.params.id}`;
	const [ movie, setMovie ] = useState({});

	function handleChange(e) {
		setMovie({
			...movie,
			[e.target.name]: [ e.target.value ]
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		axios.put(url, movie).then(res => props.history.push('/')).catch(err => console.error(err));
	}

	useEffect(() => {
		fetchMovie();
	}, []);

	function fetchMovie() {
		axios.get(url).then(res => setMovie(res.data)).then(err => console.error(err));
	}

	return (
		<div className='UpdateMovieWrapper'>
			<form onSubmit={handleSubmit}>
				<input type='text' name='title' id='title' value={movie.title} onChange={handleChange} />
				<input type='text' name='director' id='director' value={movie.director} onChange={handleChange} />
				<input type='number' name='metascore' id='metascore' value={movie.metascore} onChange={handleChange} />
				{/* <input type='text' name='stars' id='stars' /> */}
				<input type='submit' value='Update' />
			</form>
		</div>
	);
};

export default UpdateMovie;
