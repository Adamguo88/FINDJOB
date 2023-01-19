import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

import { useDispatch, useSelector } from "react-redux";
import { setLogin, setMatch } from "../../redux/actions/loginVerify";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { notMatch } = useSelector((state) => state.loginVerify.user);
  const [loginApi, contextLogin] = message.useMessage();

  const handleSubmitForm = ({ username, password }) => {
    dispatch(setMatch({ usernameVal: username, passwordVal: password }));
  };

  useEffect(() => {
    const success = () => {
      loginApi.open({
        type: "success",
        content: "登入成功，正在跳轉中",
      });
    };
    const unSuccess = () => {
      loginApi.open({
        type: "error",
        content: "登入失敗，請重新嘗試",
      });
    };
    if (notMatch) {
      dispatch(setLogin(true));
      success();
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else if (notMatch === false) {
      unSuccess();
    }
  }, [notMatch, dispatch, navigate,loginApi]);
  return (
    <>
      {contextLogin}
      <div className="navbar-header">
        <div className="navbar-list ">
          <div className="navbar-logo">
            <Link className="logo-text" to="/">
              <span>求職網登入頁面</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="myLoginPage">
        <div className="loginItem">
          <div className="loginTitle">登入系統</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmitForm}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "帳號不得為空",
                },
              ]}
            >
              <Input
                size="large"
                status={notMatch === false ? "error" : ""}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="請輸入帳號"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "密碼不得為空",
                },
              ]}
            >
              <Input
                size="large"
                status={notMatch === false ? "error" : ""}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="請輸入密碼"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登入
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
