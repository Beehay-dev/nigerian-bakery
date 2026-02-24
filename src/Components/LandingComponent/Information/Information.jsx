import standalonecake from '../../../assets/standalonecake.png';
import './information.css';

function Information() {
  return (
    <div className="info-container">
      <div className="center">
        <div className="left">
          <img src={standalonecake} alt="cake" className="cakepng" />
        </div>

        <div className="right">
          <h1>
            FOR MORE INFORMATION, CONTACT US ON:
            
            (+234-00-7389-9876)
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Information;
