import  { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import toast from 'react-hot-toast/headless';

const AllMoviesBtn = () => {
    const [movies, setMovies] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showAll , setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Movies.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data);

                const uniqueCategory = ["All", ...new Set(data.map((movie) => movie.category))];
                setCategorys(uniqueCategory);
            })
            .catch(() => toast.success('Data Loading Successful'))
            .finally(() => setLoading(false));
    }, []);

    const filteredMovies = selectedCategory === "All" ? movies : movies.filter(movie => movie.category === selectedCategory);

    const visibleMovies = showAll ? filteredMovies : filteredMovies.slice(0, 8);

    if(loading) {
        return (
            <div className="text-center text-lg ">
                Loading Movies
            </div>
        )
    }

    return (
        <div className='py-10 px-20 container mx-auto '>
            <h2 className='text-2xl mb-8 font-normal'>RECOMMENDED FOR YOU</h2>

            <div className='flex flex-wrap gap-3'>
                {
                    categorys.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowAll(false); // নতুন ক্যাটাগরি ক্লিক করলে আবার ৮টায় নামবে
                            }}
                            className={`px-4 py-2 mb-3 rounded-full border border-[#fdc700] transition-all duration-300 ${selectedCategory === category
                                ? "bg-[#fdc700] text-white"
                                : "bg- text-white hover:bg-[#fdc700]"
                                }`}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5'>
                {
                    visibleMovies.length > 0 ? (
                        visibleMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p className='text-center '>
                            No movies found in this category.
                        </p>
                    )
                }
            </div>

            <div className='flex justify-center mt-5'>
                {
                  filteredMovies.length > 8 && (
                    <button onClick={() => setShowAll(!showAll)} className='px-4 py-1.5 text-black font-semibold bg-yellow-400  rounded-lg  transition-all shadow-lg hover:shadow-yellow-300/50 border-none outline-none'>
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                  )  
                }
            </div>
        </div>

        
    );
};

export default AllMoviesBtn;
