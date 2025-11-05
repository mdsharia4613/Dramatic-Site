
import MovieData from '../../../public/Movies.json';
import MovieCard from '../MovieCard/MovieCard.jsx';

const TopRatingMovies = () => {
    const topRating = MovieData.filter(movie => movie.rating > 7);

    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-20 container mx-auto pleace-items-center gap-5'>
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
