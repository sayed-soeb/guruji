import logoImage from '../assets/Ellipse 1628.png';
import logos from '../assets/logo.jpg';
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="website-logo">
                <img src={logos} alt="" />
                <h3>Guruji</h3>
            </div>
            <div className="navbar-controlls">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Call with Astrologer</a></li>
                    <li><a href="">Live (Coming Soon )</a></li>
                </ul>
            </div>
            <div className="navbar-user">
                <img src={logoImage} />
            </div>
        </div>
    );
}

export default Navbar;