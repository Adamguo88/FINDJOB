import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";


export default function Home() {
  return (
    <div className="main-top container">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-10 p-2">
          <Link to="show" className="animateStyle">
            <div className="select_event">
              <div className="text">找工作</div>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-10 p-2">
          <Link to="company" className="animateStyle">
            <div className="select_event">
              <div className="text">公司刊登</div>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-10 p-2">
          <Link to="user" className="animateStyle">
            <div className="select_event">
              <div className="text">我要自薦</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
