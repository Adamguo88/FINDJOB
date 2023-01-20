import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import "./mycard.scss";
export default function CompanyComponents() {
  const { api } = useSelector((state) => state.controlCompany.companyDatabase);

  return (
    <div className="site-card-wrapper">
      <Row
        gutter={[16, 16]}
        justify={{
          xxl: "start",
          lg: "start",
          md: "start",
          xs: "center",
          sm: "center",
        }}
      >
        {api.map((item) => {
          return (
            <Col xxl={8} xl={12} lg={12} md={12} sm={18} xs={18} key={item.id}>
              <Card title={item.title} hoverable="true">
                <div className="card-content">
                  <div className="card-updateTime cart-border-bottom">
                    更新日期: {item.update}
                  </div>
                  <div className="location_seniority cart-border-bottom">
                    <div className="location_">工作城市: {item.city}</div>
                    <div className="seniority_">工作經驗: {item.seniority}</div>
                  </div>
                  <div className="companyName cart-border-bottom">
                    {item.companyname}
                  </div>
                  <div className="repayment cart-border-bottom">{item.pay}</div>
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
