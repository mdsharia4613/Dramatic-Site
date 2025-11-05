import React, { useState } from 'react';

const Button = () => {
    const [active, setActive] =useState(null);
    const buttons = [
        'Home',
        'About',
        'Project'
    ]
    const change = (isActive) => isActive ? `text-yellow-400 font-bold border-2 border-yellow-400` : `hover:text-yellow`
    return (
        <>
           <div className='flex gap-12'>
                <div>
                    <div>Featueres</div>
                </div>
                <div className='flex gap-5'>
                    {
                        buttons.map((btn, index) => (
                            <button key={index} onClick={() => setActive(index)} className={change(active === index)}>{btn}</button>
                        ))
                    }
                </div>
           </div>
           
  
        </>
    );
};

export default Button;