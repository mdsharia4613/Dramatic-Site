import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#181818] p-10">
                <nav>
                    <h6 className="footer-title">DRAMATIC</h6>
                    <p>Enjoy your Movie time</p>
                </nav>
                <nav>
                    <h6 className="footer-title">NAVIGATION</h6>
                    <a className="link link-hover">HOME</a>
                    <a className="link link-hover">TV SHOW</a>
                    <a className="link link-hover">MOVIES</a>
                    <a className="link link-hover">NEW</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookie Preferemces</a>
                    <a className="link link-hover">Corporate Information</a>
                </nav>
                <nav>
                    <h6 className="footer-title">TALK TO US</h6>
                    <a className="link link-hover">support@ercom.com</a>
                    <a className="link link-hover">+66 2399 1145</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Folling US</h6>
                    <div className='flex items-center gap-4'>
                        <p><FaFacebook fontSize={20} /></p>
                        <p><FaTwitter  fontSize={20}/></p>
                        <p><FaYoutube  fontSize={20}/></p>
                    </div>

                </nav>

            </footer>
        </div>
    );
};

export default Footer;