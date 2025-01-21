import React,{useState} from 'react'
import './Location.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
const Location = ({ isOpen, onClose }) => {
    const [showMoreCities, setShowMoreCities] = useState(false);

    const toggleShowMoreCities = () => {
      setShowMoreCities(!showMoreCities);
    };
     if (!isOpen) return null;
    
  return (
    <div className="popup-overlay1" onClick={onClose}>
      <div className="popup-content1" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Search for your city"
          className="search-input"
        />
        <button className="detect-location">
          {" "}
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          Detect my location
        </button>
        <div className="popular-cities">
          <h3>Popular Cities</h3>
          <div className="city-icons">
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
                alt="hello"
              />
              Mumbai
            </div>
            <div className="city">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"
                alt=""
              />
              Delhi-NCR
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"
                alt=""
              />
              Bengaluru
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
                alt=""
              />
              Hyderabad
            </div>
            <div className="city">
              {" "}
              <img
                src="	https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
                alt=""
              />
              Ahmedabad
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"
                alt=""
              />
              Chandigarh
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"
                alt=""
              />
              Chennai
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"
                alt=""
              />
              Pune
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
                alt=""
              />
              Kolkata
            </div>
            <div className="city">
              {" "}
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"
                alt=""
              />
              Kochi
            </div>
          </div>
        </div>
        <div className="other-cities">
          <h3>Other Cities</h3>
          <div className="city-list">
            <div>Kota</div>
            <div>Jaipur</div>
            <div>Bhopal</div>
            <div>Agra</div>
            <div>Udaipur</div>
            <div>Noida</div>
            {/* Add more cities as needed */}
            {showMoreCities && (
              <>
                <div>Aizawl</div>
                <div>Ajmer</div>
                <div>Bhilwara</div>
                <div>Ambala</div>
                <div>Amritsar</div>
                <div>Anand</div>
                <div>Vadodara</div>
                <div>Rajkot</div>
                <div>Jhunjunu</div>
                <div>Kanpur</div>
                <div>Nagpur</div>
                <div>Jodhpur</div>
                <div>Ranchi</div>
                <div>Thane</div>
                <div>Surat</div>
             
              </>
            )}
          </div>
          <button className="toggle-cities" onClick={toggleShowMoreCities}>
            {showMoreCities ? "Hide Cities" : "Show More Cities"}
          </button>
        </div>
        <button className="hide-cities" onClick={onClose}>
          Hide All Cities
        </button>
      </div>
    </div>
  );
}

export default Location
