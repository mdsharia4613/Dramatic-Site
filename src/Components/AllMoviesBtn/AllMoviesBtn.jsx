import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

const AllMoviesBtn = () => {
    const [movies, setMovies] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);

                const uniqueCategory = [...new Set(data.map((movie) => movie.category))];
                setCategorys(uniqueCategory);
            });
    }, []); 

    const filteredMovies = selectedCategory === "All" ? movies : movies.filter(movie => movie.category === setCategorys);

    return (
        <div className='p-4'>

            <div className='flex flex-wrap gap-3'>
                {
                    categorys.map((category, index) => (
                        <button key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-1.5 rounded-lg transition-all ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-gray-400 text-black'}`}>{category}</button>
                    ))
                }
            </div>

            <div>
                {
                    filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>

        
    );
};

export default AllMoviesBtn;
