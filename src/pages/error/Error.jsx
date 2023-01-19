import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import "./errorStyle.scss";

export default function Error() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      toHome();
    }, 3000);
  });
  return (
    <div className="errorPage">
      <Result
        status="404"
        title="404"
        subTitle="找不到這個畫面，3秒後回首頁"
        extra={
          <Button type="primary" onClick={toHome}>
            首頁
          </Button>
        }
      />
    </div>
  );
}
