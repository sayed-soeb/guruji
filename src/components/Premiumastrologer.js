import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import Astrologercard from './Astrologercard'

function Premiumastrologer() {
    return (
        <div className="premiumastrologer-container">
            <div className="testimonial-heading">
                    <FontAwesomeIcon icon={faStar} />
                    <h3>Premium Astrologers</h3>
                    <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="online-astrologers-container">
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
                <Astrologercard />
            </div>
            <div className="card-end"></div>
        </div>
    )
}

export default Premiumastrologer