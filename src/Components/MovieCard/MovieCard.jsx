import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
    const { card_picture, title, released_date, platform, rating } = movie;

    return (
        <div className="w-72 bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer mt-8">
            {/* Movie Image */}
            <div className="flex justify-center mb-3">
                <img
                    className="w-60 h-80 object-contain rounded-2xl"
                    src={card_picture}
                    alt={title}
                />
            </div>

            {/* Title and Icons */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
                <div className="flex gap-2 text-xl text-gray-600">
                    <MdOutlineRemoveRedEye className="hover:text-blue-500 transition" />
                    <FaHeartCircleCheck className="hover:text-red-500 transition" />
                </div>
            </div>

            {/* Platform, Rating, and Date */}
            <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="font-medium">{platform}</p>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        name={`rating-${title}`}
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="3 star"
                    />
                    <span className="text-gray-800 font-semibold">{rating}</span>
                </div>
            </div>

            {/* Release Year */}
            <p className="mt-2 text-xs text-gray-500 text-right">
                Released: {released_date}
            </p>
        </div>
    );
};

export default MovieCard;
