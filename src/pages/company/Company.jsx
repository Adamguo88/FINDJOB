import React from "react";
import CompanyForm from "./CompanyForm";
import "./company.scss";
import NotLoginPage from "../../components/NotLoginPage";

export default function Company() {
  return (
    <>
      {!window.sessionStorage.getItem('login_success') ? (
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
