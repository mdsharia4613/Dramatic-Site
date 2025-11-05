import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


const MovieCard = ({ movie }) => {
    const { card_picture, title,  platform, rating } = movie;

    return (
        <div className="w-[300px] h-[420px] border  border-yellow-300 rounded-2xl shadow-[#fdc700] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-4 cursor-pointer mt-8">
            {/* Movie Image */}
            <div className="flex justify-center mb-3">
                <img
                    className="w-48 h-64 object-cover rounded-2xl"
                    src={card_picture}
                    alt={title}
                />
            </div>

            {/* Title and Icons */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg ">{title}</h2>
                <div className="flex gap-2 text-xl ">
                    <MdOutlineRemoveRedEye className="hover:text-[#fdc700] transition" />
                    <FaHeartCircleCheck className="hover:text-red-500 transition" />
                </div>
            </div>

            {/* Platform, Rating, and Date */}
            <div className="flex justify-between items-center text-sm ">
                <p className="font-bold text-[16px] px-1.5 py-0.5 bg-[#fdc700] text-black">{platform}</p>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 1 }, (_, i) => (
                        <FaRegStar
                            key={i}
                            className={`text-${i < Math.round(rating) ? "yellow-400" : "gray-300"}`}
                        />
                    ))}
                    <span className="font-semibold ml-1">{rating}</span>
                </div>

            </div>

            
        </div>
    );
};

export default MovieCard;
