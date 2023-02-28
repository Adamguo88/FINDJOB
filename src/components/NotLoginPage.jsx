import React,{useEffect} from "react";
import "./css/notLoginPage.scss";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotLoginPage() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  
  useEffect(()=>{
    const redirect = setTimeout(() => {
      gotoLogin()
    }, 3000);

    return(()=>{
      clearTimeout(redirect)
    })
  })

  return (
    <div className="notLoginPage">
      <Result
        status="warning"
        title="請先進行登入，才可使用，3秒後自動跳轉到首頁"
        extra={
          <Button type="primary" key="console" onClick={gotoLogin}>
            去登入
          </Button>
        }
      />
    </div>
  );
}
