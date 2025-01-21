import React from 'react'
import './Play.css'
const Play = () => {
  return (
    <div className="events-page">
    
      <div className="leftcontent">
        <h2>Filter</h2>
        <div className="options">
          <div className="opt1">
            <details open>
              <summary>Dates</summary>
              <a href="/">Today</a>
              <a href="/">Tomorrow</a>
              <a href="/">This Weekend</a>
            </details>
          </div>
          <div className="opt2">
            <details open>
              <summary>Categories</summary>
              <a href="/">Theatre</a>
              <a href="/">Story Telling</a>
            </details>
          </div>
          <div className="opt3">
            <details>
              <summary>More Filters</summary>
              <a href="/">Kids Allowed</a>
              <a href="/">Outdoor Events</a>
            </details>
          </div>

          <button>Browse by Cinemas</button>
        </div>
      </div>
      <div className="event-list">
        <h2>Plays In Jaipur</h2>
        <div className="event-tags">
          <button>Theatre</button>
          <button>Storytelling</button>
        </div>
        <div className="events-container">
          <EventCard
            title="HUMARE RAM Ft Ashutosh Rana and..."
            date="Sun, 8 Dec"
            venue="Birla Auditorium: Jaipur"
            language="Hindi"
            price="₹ 799 onwards"
            imageUrl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376688-gjwhxeartt-portrait.jpg"
            promoted
          />
          <EventCard
            title="DANCE LIKE A MAN"
            date="Sun, 25 Aug"
            venue="Rajasthan International..."
            language="English"
            price="₹ 99"
            imageUrl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408428-xtwwgqdwyv-portrait.jpg"
          />
          <EventCard
            title="Gauhar - a play by Lillete Dubey"
            date="Sat, 24 Aug"
            venue="Rajasthan International..."
            language="English"
            price="₹ 99"
            imageUrl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408171-gdcdsarrcl-portrait.jpg"
          />
          <EventCard
            title="GHAR X HELLY SHAH"
            date="Sat, 24 Aug"
            venue="Jaipur Comedy Club: Jaipur"
            language="English/Hindi/Hinglish"
            price="₹ 499 onwards"
            imageUrl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403440-mbfulhqrjb-portrait.jpg"
          />
        </div>
      </div>
    </div>
  );
}


const EventCard = ({
    title,
    date,
    venue,
    language,
    price,
    imageUrl,
    promoted,
}) => {
    return (
        <div className="event-card">
      {promoted && <span className="promoted">PROMOTED</span>}
      <img src={imageUrl} alt={title} />
      <div className="event-details">
        <h3>{title}</h3>
        <p>{venue}</p>
        <p>{language}</p>
        <p>{price}</p>
      </div>
    </div>
        
  );
};


export default Play
