import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import chakraImage from '../assets/chakra.png';
import loverProblemImage from '../assets/problems/Vector (1).png';
import marriageProblemImage from '../assets/problems/Vector (2).png';
import businessProblemImage from '../assets/problems/Vector (3).png';
import grahProblemImage from '../assets/problems/Vector (4).png';
import healthProblemImage from '../assets/problems/Vector (5).png';
import moneyProblemImage from '../assets/problems/_Compound Path_.png';
import chakraouter from '../assets/chakra2.png';

function Chakra() {
  return (
    <div className="chakra-container">
      <div className="testimonial-heading">
        <FontAwesomeIcon icon={faStar} />
        <h3>Many Problems, One Solution</h3>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="chakra-main-section">
        <div className="chakra-main-section-left">
          <div className="problem">
            <div className="problem-img">
              <img src={loverProblemImage} alt="Lover Problem" />
            </div>
            <div className="problem-title">Lover Problem</div>
          </div>
          <div className="problem">
            <div className="problem-img">
              <img src={marriageProblemImage} alt="Marriage Problem" />
            </div>
            <div className="problem-title">Marriage Problem</div>
          </div>
          <div className="problem">
            <div className="problem-img">
              <img src={businessProblemImage} alt="Business Problem" />
            </div>
            <div className="problem-title">Business Problem</div>
          </div>
        </div>
        <div className="chakra-main-section-center">
          <div className="chakra-main-section-center-img">
            <img src={chakraImage} alt="Chakra" />
          </div>
          <div className="chakra-main-section-center-img2">
            <img
              src={chakraouter}
              alt=""
            />
          </div>
        </div>
        <div className="chakra-main-section-right">
          <div className="problem">
            <div className="problem-img">
              <img src={grahProblemImage} alt="Grah Problem" />
            </div>
            <div className="problem-title">Grah Problem</div>
          </div>
          <div className="problem">
            <div className="problem-img">
              <img src={healthProblemImage} alt="Health Problem" />
            </div>
            <div className="problem-title">Health Problem</div>
          </div>
          <div className="problem">
            <div className="problem-img">
              <img src={moneyProblemImage} alt="Money Problem" />
            </div>
            <div className="problem-title">Money Problem</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chakra;
