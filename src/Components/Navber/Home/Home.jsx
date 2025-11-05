import { useState } from 'react';
import Banner from '../../Banner/Banner';
import Cards from '../../Cards/Cards';
import Test from '../../Test/Test';
import Test2 from '../../Test2/Test2';
import Products from '../../Products/Products';
import AllMoviesBtn from '../../AllMoviesBtn/AllMoviesBtn';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);

    // 🛒 Add to cart
    // const handleAddToCard = (product) => {
    //     setCartItems(prevItems => {
    //         const existingItem = prevItems.find(item => item.id === product.id);

    //         if (existingItem) {
    //             // যদি আগেই থাকে, শুধু alert দেখাও, quantity বাড়াবে না
    //             alert("This product is already in the cart!");
    //             return prevItems;
    //         } else {
    //             // নতুন প্রডাক্ট হলে কার্টে যোগ করো
    //             return [...prevItems, { ...product, quantity: 1 }];
    //         }
    //     });
    // };
    const handleAddToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if(existingItem){
                alert('card already added');
                return prevItems;
            }
            else{
                return [...prevItems , {...product , quantity: 1}]
            }
        })
    }
    console.log(cartItems)
    // Shopping icon এ শুধু unique প্রডাক্ট সংখ্যা দেখাবে
    const productCount = cartItems.length;

    // ➕ Quantity বাড়ানো
    // const handleIncrease = (product) => {
    //     setCartItems(prevItems =>
    //         prevItems.map(item =>
    //             item.id === product.id
    //                 ? { ...item, quantity: item.quantity + 1 }
    //                 : item
    //         )
    //     );
    // };

    const handleIncrease = (product) => {
        setCartItems(prevItems => 
            prevItems.map(item => item.id === product.id ? {
                ...item , quantity: item.quantity + 1
            } : item) 
        )
    };
    // ➖ Quantity কমানো
    // const handleDecrease = (product) => {
    //     setCartItems(prevItems =>
    //         prevItems
    //             .map(item =>
    //                 item.id === product.id
    //                     ? { ...item, quantity: item.quantity - 1 }
    //                     : item
    //             )
    //             .filter(item => item.quantity > 0)
    //     );
    // };

    const handleDecrease = (product) => {
        setCartItems (prevItems =>
            prevItems.map(item => item.id === product.id ?{...item , quantity: item.quantity - 1} 
                : item)
                .filter(item => item.quantity > 0)
        )
    }


    // ❌ প্রোডাক্ট পুরোপুরি রিমুভ করা
    // const handleRemove = (product) => {
    //     setCartItems(prevItems =>
    //         prevItems.filter(item => item.id !== product.id)
    //     );
    // };

    const handleRemove = (product) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== product.id)
        )
    }

    

    return (
        <div>
            <Banner />
            <AllMoviesBtn></AllMoviesBtn>
            {/* <Test    /> */}
            {/* <Cards handleAddToCart={handleAddToCart} /> */}
            {/* <Test2 productCount={productCount} handleIncrease={handleIncrease} handleRemove={handleRemove} handleDecrease={handleDecrease} cartItems={cartItems}></Test2> */}
            {/* <Products></Products> */}
        </div>
    );
};

export default Home;
