import React from 'react'
import "../style/allcss.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const Strem = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/et00097589-djkbwehfxs-landscape.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/et00347275-nwaswjepav-landscape.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bholaa-et00326977-1680103464.jpg"
              alt="Slide 3"
            />
          </div>
        </Slider>
      </div>

      <div className="container">
        <div className="up">
          <h2>Premiere the week</h2>
          <p onClick={() => navigate("/movie")}>See More</p>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjAzLjlLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-ltbxzqcetd-portrait.jpg"
            alt=""
          />

          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMzkuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341295-aypjlfaumb-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00390813-gxekzeuvxm-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA2NS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391805-avuuxnlqzz-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00386901-elkalzbpvg-portrait.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="up">
          <h2>New on Stream</h2>
          <p onClick={() => navigate("/movie")}>See More</p>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00375399-uguxcjvavq-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393051-jcmkmjteld-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00343041-pvtzslyeab-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA2NS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391805-avuuxnlqzz-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00358147-mrpgvrjcen-portrait.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="premiere">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/exclusives-banner-web-collection-202208191200.png"
          alt=""
        />
        <div className="containers">
          <div className="up">
            <h2> </h2>
            <p onClick={() => navigate("/movie")}>See More</p>
          </div>
          {/* <p>Brand New Release Every Friday</p> */}
          <div className="card">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00407206-uzazvmeulm-portrait.jpg"
              alt=""
            />
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00406476-tkabvakawx-portrait.jpg"
              alt=""
            />
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00403816-xahkzkdlju-portrait.jpg"
              alt=""
            />
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00337480-gqjcswhltn-portrait.jpg"
              alt=""
            />
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00406617-kundbmvnmb-portrait.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="up">
          <h2>Movies On Discount</h2>
          <p onClick={() => navigate("/movie")}>See More</p>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00375399-uguxcjvavq-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393051-jcmkmjteld-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00343041-pvtzslyeab-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA2NS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391805-avuuxnlqzz-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00358147-mrpgvrjcen-portrait.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="up">
          <h2>Top TV Shows</h2>
          <p onClick={() => navigate("/movie")}>See More</p>
        </div>
        <div className="card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00375399-uguxcjvavq-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393051-jcmkmjteld-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_exclusive_v1.png,t-false,lfo-bottom_left,l-end/et00343041-pvtzslyeab-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA2NS4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391805-avuuxnlqzz-portrait.jpg"
            alt=""
          />
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00358147-mrpgvrjcen-portrait.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Strem
