import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

const Astrologercard=() => {
    const astrologers = [
        {
          id: 1,
          name: 'Astrologer 1',
          image: require('../assets/frame/Frame 48096277.png'), // Replace with the path to the image
          specialty: 'Specialty 1',
        },
        {
          id: 2,
          name: 'Astrologer 2',
          image: require('../assets/frame/Frame 48096283.png'), // Replace with the path to the image
          specialty: 'Specialty 2',
        },
        {
            id: 3,
            name: 'Astrologer 2',
            image: require('../assets/frame/Frame 48096281.png'), // Replace with the path to the image
            specialty: 'Specialty 2',
          },
        // Add more astrologers here
      ];
    
      const maxCardsToShow = astrologers.length; // Maximum number of cards to show
    
      return (
        <div className="astrologer-masonry">
          {astrologers.slice(0, maxCardsToShow).map((astrologer) => (
            <div className="astrologer-card" key={astrologer.id}>
              <img src={astrologer.image} alt={astrologer.name} />
            </div>
          ))}
        </div>
      );
    };
export default Astrologercard