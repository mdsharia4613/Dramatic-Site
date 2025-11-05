
import MovieData from '../../../public/Movies.json';
import MovieCard from '../MovieCard/MovieCard.jsx';

const TopRatingMovies = () => {
    const topRating = MovieData.filter(movie => movie.rating > 7);

    return (
        <>
        <div className=''>
            {
                topRating.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </div>
        </>
    );
};

export default TopRatingMovies;
