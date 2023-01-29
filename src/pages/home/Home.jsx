import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import "./home.scss";

export default function Home() {
  return (
    <div className="main-top container main-padding">
      <Row
        gutter={[16, 16]}
        justify={{
          xxl: "start",
          xl: "start",
          lg: "start",
          md: "start",
          sm: "center",
          xs: "center",
        }}
      >
        <Col xxl={8} xl={8} lg={8} md={12} sm={18} xs={22}>
          <div className="home-card">
            <Link to="show" className="animateStyle">
              <div className="select_event">
                <div className="text">找工作</div>
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={18} xs={22}>
          <div className="home-card">
            <Link to="company" className="animateStyle">
              <div className="select_event">
                <div className="text">公司刊登</div>
              </div>
            </Link>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={18} xs={22}>
          <div className="home-card">
            <Link to="user" className="animateStyle">
              <div className="select_event">
                <div className="text">我要自薦</div>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
