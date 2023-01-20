import React, { useState } from "react";
import CompanyComponents from "../../components/card/CompanyComponents";
import UserComponent from "../../components/card/UserComponent";
import { Button } from "antd";

import "./show.scss";

export default function Show() {
  const [isCompany, setIsCompany] = useState(true);
  const scrollToTop = (flag) => {
    const nowPageYoffSet = window.scrollY;
    if (nowPageYoffSet > 100) {
      setIsCompany(flag);
      window.scroll(0, 0);
      return;
    } else {
      setIsCompany(flag);
    }
  };
  return (
    <div className="show-main-top">
      <div className="rightSelect">
        <div className="selectMenu">
          <Button
            type="primary"
            onClick={() => {
              scrollToTop(true);
            }}
          >
            展示公司刊登資料
          </Button>
        </div>
        <div className="selectMenu">
          <Button type="primary" onClick={() => scrollToTop(false)}>
            展示使用者刊登資料
          </Button>
        </div>
      </div>
      <div className="mainContent">
        <div className="user-and_company_mainContent">
          <div className="show-detail-data">
            {isCompany ? <CompanyComponents /> : <UserComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}
