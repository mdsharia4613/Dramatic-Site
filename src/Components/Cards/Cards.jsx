import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ handleAddToCart }) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-5 w-10/12 mx-auto mt-7'>
                {
                datas.map(data => <Card handleAddToCart={handleAddToCart} key={data.id} data={data}></Card>)
                }
        </div>
    );
};

export default Cards;