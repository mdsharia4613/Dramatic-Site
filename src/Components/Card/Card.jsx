// import React, { useState } from 'react';

const Card = ({ data, handleAddToCart }) => {
    const { brand, productName, img, } = data;
    // const [showDetails, setShowDetails] = useState(false);
    return (
        <div className=' border border-yellow-400 space-y-5 w-60 shadow shadow-yellow-400 p-5'>
            <img className='w-28 ' src={img} alt="" />
            <p className='text-2xl font-semibold'>{productName}</p>
            <p>{brand}</p>
            <button onClick={() => handleAddToCart(data)} className='bg-amber-300 py-1 px-2 rounded-2xl' type="button">ADD To Cart</button>
          
            
        </div>
    );
};

export default Card;