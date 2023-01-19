import React, { useState } from "react";
import CompanyComponents from "../../components/card/CompanyComponents";
import UserComponent from "../../components/card/UserComponent";
import { Button } from "antd";

import "./show.scss";

export default function Show() {
  const [isCompany, setIsCompany] = useState(true);

  return (
    <div className="show-main-top">
      <div className="rightSelect">
        <div className="selectMenu">
          <Button type="primary" onClick={() => setIsCompany(true)}>
            展示公司刊登資料
          </Button>
        </div>
        <div className="selectMenu">
          <Button type="primary" onClick={() => setIsCompany(false)}>
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
