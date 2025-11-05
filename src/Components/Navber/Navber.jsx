import { NavLink } from 'react-router-dom';

const Navber = () => {
    const navLinkstyle = ({isActive}) => isActive ? 'font-semibold text-yellow-400 transition-all duration-500': 'hover:text-yellow-400 transition-all duration-500'

    const links = (
        <>
            <li className="dropdown dropdown-hover transition-all ">
                <NavLink to='/' className={navLinkstyle}>Home</NavLink>
                <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm text-black">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </li>
            <li><NavLink to='show' className={navLinkstyle}>TV Show</NavLink></li>
            <li><NavLink to='movies' className={navLinkstyle}>Movies</NavLink></li>
            <li><NavLink to='news' className={navLinkstyle}>News</NavLink></li> 
        </>
    )
    return (
        <div>
            <div className="navbar shadow-md bg-black/40 top-0  backdrop-blur-md text-white fixed left-0 right-0 z-100">
                <div className='w-11/12 mx-auto flex justify-between items-center'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="  dropdown-content bg-black/40 backdrop-blur-md rounded-box p-2 shadow">

                                {links}
                            </ul>
                        </div>
                        <div className='flex items-center gap-10'>
                            <a className="text-xl font-bold ">DRAMATIC</a>
                            <div className="navbar-center hidden lg:flex">
                                <ul  className="  px-1 flex gap-10">
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end flex gap-3 ">
                        <label className="input bg-white/10 rounded-full border border-transparent focus-within:border-yellow-400 transition duration-500 px-3 outline-none">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" className='bg-transparent outline-none text-sm text-white' />
                        </label>
                        <div className="avatar">
                            <div className="ring-yellow-400 ring-offset-base-100 w-full rounded-full ring-2 ring-offset-2">
                                <img className='w-8' src="https://i.ibb.co.com/LhpgxGCm/IMG20230904143344-2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;