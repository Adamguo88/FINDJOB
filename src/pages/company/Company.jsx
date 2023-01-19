import React from "react";
import CompanyForm from "./CompanyForm";
import "./company.scss";
import NotLoginPage from "../../components/NotLoginPage";

import { useSelector } from "react-redux";
export default function Company() {
  const { login } = useSelector((state) => state.loginVerify.user);
  
  return (
    <>
      {login === false ? (
        <NotLoginPage />
      ) : (
        <div className="main-top container">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-3">
            <div className="company-find-title">
              <span>我要找人才</span>
            </div>
            <CompanyForm />
          </div>
        </div>
      )}
    </>
  );
}
