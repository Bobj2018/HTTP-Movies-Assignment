import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
	const { title, director, metascore, stars, id } = props.movie;

	return (
		<div className='movie-card'>
			{props.isMovie && (
				<MovieButtons
					saveMovie={props.saveMovie}
					deleteMovie={props.deleteMovie}
					id={id}
				/>
			)}
			<h2>{title}</h2>
			<div className='movie-director'>
				Director: <em>{director}</em>
			</div>
			<div className='movie-metascore'>
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.map(star => (
				<div key={star} className='movie-star'>
					{star}
				</div>
			))}
		</div>
	);
};
function MovieButtons(props) {
	return (
		<div>
			<button onClick={props.saveMovie}>Save</button>
			<button onClick={e => props.deleteMovie(props.id)}>Delete</button>
			<Link className='save-button' to={`/update-movie/${props.id}`}>
				Edit Movie
			</Link>
		</div>
	);
}

export default MovieCard;
