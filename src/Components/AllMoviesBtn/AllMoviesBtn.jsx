import  { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

const AllMoviesBtn = () => {
    const [movies, setMovies] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll , setShowAll] = useState(false);

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);

                const uniqueCategory = ["All", ...new Set(data.map((movie) => movie.category))];
                setCategorys(uniqueCategory);
            });
    }, []); 

    const filteredMovies = selectedCategory === "All" ? movies : movies.filter(movie => movie.category === selectedCategory);

    const visibleMovies = showAll ? filteredMovies : filteredMovies.slice(0, 8);

    return (
        <div className='p-4'>

            <div className='flex flex-wrap gap-3'>
                {
                    categorys.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowAll(false); // নতুন ক্যাটাগরি ক্লিক করলে আবার ৮টায় নামবে
                            }}
                            className={`px-4 py-2 rounded-lg transition-all duration-300 ${selectedCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-5'>
                {
                    visibleMovies.length > 0 ? (
                        visibleMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p className='text-center text-gray-500'>
                            No movies found in this category.
                        </p>
                    )
                }
            </div>

            <div className='flex justify-center mt-5'>
                {
                  filteredMovies.length > 8 && (
                    <button onClick={() => setShowAll(!showAll)} className='px-4 py-1.5 bg-yellow-400 font-medium rounded-lg hover:bg-amber-500 transition-all'>
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                  )  
                }
            </div>
        </div>

        
    );
};

export default AllMoviesBtn;
