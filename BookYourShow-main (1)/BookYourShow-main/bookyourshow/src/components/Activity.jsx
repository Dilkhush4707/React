import React from "react";
import "./Activity.css";

const Activity = () => {
  const activities = [
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMSBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00305266-uscyuvtrun-portrait.jpg",
      title: "Sound & Light Show - Amber Fort",
      location: "Amber Fort & Palace, Jaipur",
      date: "Wed, 21 Aug onwards",
      price: "₹ 250",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00314506-yflyntlqsy-portrait.jpg",
      title: "PUNO The Adventure Arena - Jaipur",
      location: "PUNO - Adventure and Funberg: Jaipur",
      date: "Thu, 22 Aug",
      price: "₹ 800 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00388326-lfmzfmjdxg-portrait.jpg",
      title: "FUNBERG - Adventure, Go Karting & Trampoline",
      location: "Funberg: Jaipur",
      date: "Thu, 22 Aug",
      price: "₹ 800 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361398-dzrdbcvysd-portrait.jpg",
      title: "Jaipur Darshan by Bus ",
      location: "Meeting Point: Jaipur Railway Station",
      date: "Thu, 22 Aug",
      price: "₹ 800 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00391296-tjtjrfgmvl-portrait.jpg",
      title: "Pune Advance Jaipur",
      location: "Pune Advance: Jaipur",
      price: "₹ 500 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408002-cfphvlhera-portrait.jpg",
      title: "Pinkcityviews Mini Kedarnath Trek ",
      location: "Kedarnath Trek Start: Jaipur",
      date: "Thu, 22 Aug",
      price: "₹ 200 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00312647-pzxjxrjmtn-portrait.jpg",
      title: "Mystery Rooms - Jaipur",
      location: "Mystery Rooms, C Scheme: Jaipur",
      date: "Thu, 22 Aug",
      price: "₹ 100 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMiBBdWcgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00129166-gjragzbdsw-portrait.jpg",
      title: "Mystery Rooms - Jaipur",
      location: "Multiple Venues",
      date: "Thu, 22 Aug",
      price: "₹ 600 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404343-cygkycrycg-portrait.jpg",
      title: "GFalguni Pathak Pre Navratri",
      location: "Multiple Venues",
      date: "Thu, 22 Aug",
      price: "₹ 100 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403120-vpwjkqerpk-portrait.jpg",
      title: "Garba Carnival 2024",
      location: "R K Patel Farm",
      date: "Thu, 22 Aug",
      price: "₹ 200 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408189-ctwawbewvw-portrait.jpg",
      title: "Mandli Garbar",
      location: "Multiple Venues",
      date: "Thu, 22 Aug",
      price: "₹ 100 onwards",
    },
    {
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406774-wnzzygszug-portrait.jpg",
      title: "Friends Trivia Night",
      location: "Multiple Venues",
      date: "Thu, 22 Aug",
      price: "₹ 1000 onwards",
    },
    // Add more activity objects here...
  ];
  const ActivityCard = ({ image, title, location, date, price }) => {
    return (
      <div className="activity-card">
        <img src={image} alt={title} />
        <div className="activity-info">
          <h3>{title}</h3>
          <p>{location}</p>
          <p>{date}</p>
          <p>{price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="activity-page">
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
              <a href="/">Gaming</a>
              <a href="/">Adventure</a>
              <a href="/">Unique Tour</a>
              <a href="/">Tourism Activities</a>
              <a href="/">Navratri celebration</a>
              <a href="/">Events</a>
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
      <div className="activities-section">
        <h2>Activities in Jaipur</h2>
        <div className="tags">
          <button>Adventure</button>
          <button>Gaming</button>
          <button>Unique Tours</button>
          <button>Tourist Attractions</button>
        </div>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              image={activity.image}
              title={activity.title}
              location={activity.location}
              date={activity.date}
              price={activity.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
