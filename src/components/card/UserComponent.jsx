import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import "./mycard.scss";
export default function UserComponents() {
  const {api} = useSelector((state) => state.controlUser.userDatabase);
  return (
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]} justify='center'>
        {api.map((item) => {
          return (
            <Col xxl={8} xl={12} lg={12} md={12} sm={18} xs={18} key={item.id}>
              <Card title={item.title} hoverable="true">
                <div className="card-content">
                  <div className="card-updateTime cart-border-bottom">
                    更新日期: {item.updateTime}
                  </div>
                  <div className="location_seniority cart-border-bottom">
                    <div className="location_">希望工作地點: {item.city}</div>
                    <div className="seniority_">月薪: {item.payRnge}</div>
                  </div>
                  <div className="companyName cart-border-bottom">
                    連絡電話: {item.phoneNumber}
                  </div>
                  <div className="repayment cart-border-bottom">
                    信箱: {item.emailAddress}
                  </div>
                  <div className="outline_info">
                    <div className="card_information">{item.information}</div>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
