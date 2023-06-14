import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faDollarSign, faLock, faCertificate, faCreditCard } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className="home-container">
            <h1>"Astrology for Clarity"</h1>
            <p>Your Name is a Vadic Astrologer and has expertise in Vaastu and Mantra Theraphy</p>
            <button className="consult-button">Consult Now</button>
            <div className="service-container">
                <div className="customer-support service">
                    <FontAwesomeIcon icon={faHeadset} />
                    <span>24 X 7 Customer Support</span>
                </div>
                <div className="refund service">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span>100% Refund if Unsatisfied</span>
                </div>
                <div className="private service">
                    <FontAwesomeIcon icon={faLock} />
                    <span>Private & Confidential</span>
                </div>
                <div className="verified service">
                <FontAwesomeIcon icon={faCertificate} />
                    <span>Verified Astrologers</span>
                </div>
                <div className="secure-payment service">
                   <FontAwesomeIcon icon={faCreditCard} />
                    <span>Secure Payment</span>
                </div>
            </div>
        </div>
    );
}

export default Home;