import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";




const MovieCard = ({ movie }) => {
    const { card_picture, title,  platform, rating } = movie;
    const stars = rating /2;
    const fullStars = Math.floor(stars);
    const halStar = stars % 1 >= 0.5;

    return (
        <div className="w-[250px] h-[370px] md:w-[300px] md:h-[400px]    rounded-2xl shadow-[#fdc700] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-5 cursor-pointer mt-8 ">
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
                    <MdOutlineRemoveRedEye className= " text-gray-600 hover:text-[#fdc700] transition" />
                    <FaHeartCircleCheck className="text-red-500 transition" />
                </div>
            </div>

            {/* Platform, Rating, and Date */}
            <div className="flex justify-between items-center text-sm ">
                <p className="font-bold text-[16px] px-1.5 py-0.5 bg-[#fdc700] text-black rounded-lg">{platform}</p>
                <div className="flex items-center gap-1">
                    {Array.from({length: 5}, (_, i) => {
                        if(i < fullStars){
                            return <FaStar key={i} className="text-yellow-400"></FaStar>
                        }
                        else if(i === fullStars && halStar){
                            return <FaStarHalfAlt key={i} className="text-yellow-400"></FaStarHalfAlt>
                        }
                        else{
                            return <FaRegStar key={i} className="text-yellow-400" ></FaRegStar>
                        }
                    })}
                    <span className="font-semibold ml-1">{rating}</span>
                </div>
            </div>

            
        </div>
    );
};

export default MovieCard;
