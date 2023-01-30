import React, { useEffect, useState } from "react";
import { setBehindDeleteUserData } from "../../redux/actions/controlUser";
import {setDeleteUserArticle} from '../../redux/actions/loginVerify'
import { Space, Table, Button } from "antd";
import { useSelector,useDispatch } from "react-redux";
import "./edit.scss";
const { Column } = Table;
export default function UserBehind() {
  const dispatch = useDispatch()
  const [firstData, setFirstData] = useState([]);
  const { user } = useSelector(
    (state) => state.loginVerify.nowLoginUser.article
  );
  const deleteCompanyData = (id) => {
    dispatch(setBehindDeleteUserData(id));
    dispatch(setDeleteUserArticle(id))
  };
  const userData = useSelector((state) => state.controlUser.userDatabase.api);
  useEffect(() => {
    const findFirstData = () => {
      let findMatchData = userData.filter((item) => {
        let match = user.find((id) => id === item.user_ID);
        return match;
      });
      setFirstData(findMatchData);
    };
    findFirstData();
  }, [user, userData]);
  return (
    <div className="behind-show-page">
      <div className="company-title">普通用戶管理頁面</div>
      <Table dataSource={firstData}>
        <Column title="刊登標題" dataIndex="title" key="id" />
        <Column title="工作縣市" dataIndex="city" key="id" />
        <Column title="月薪/年薪" dataIndex="payRnge" key="id" />
        <Column title="信箱" dataIndex="emailAddress" key="id" />
        <Column title="電話" dataIndex="phoneNumber" key="id" />
        <Column title="更新日期" dataIndex="updateTime" key="id" />
        <Column
          title="編輯"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button type="primary">編輯</Button>
              <Button
                type="primary"
                onClick={() => deleteCompanyData(record.user_ID)}
                danger
              >
                刪除
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
