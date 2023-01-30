import React, { useEffect, useState } from "react";
import { setBehindDeleteCompanyData } from "../../redux/actions/controlCompany";
import { setDeleteCompanyArticle } from "../../redux/actions/loginVerify";
import { useSelector, useDispatch } from "react-redux";
import { Space, Table, Button } from "antd";
import "./edit.scss";
const { Column } = Table;
export default function CompanyBehind() {
  const dispatch = useDispatch();
  const [firstData, setFirstData] = useState([]);
  const { company } = useSelector(
    (state) => state.loginVerify.nowLoginUser.article
  );
  const companyData = useSelector(
    (state) => state.controlCompany.companyDatabase.api
  );
  const deleteCompanyData = (id) => {
    dispatch(setBehindDeleteCompanyData(id));
    dispatch(setDeleteCompanyArticle(id))
  };
  useEffect(() => {
    const findFirstData = () => {
      let findMatchData = companyData.filter((item) => {
        let match = company.find((id) => id === item.user_ID);
        return match;
      });
      setFirstData(findMatchData);
    };
    findFirstData();
  }, [company, companyData]);
  return (
    <div className="behind-show-page">
      <div className="company-title">公司刊登管理頁面</div>
      <Table dataSource={firstData}>
        <Column title="刊登標題" dataIndex="title" key="title" />
        <Column title="公司名稱" dataIndex="companyname" key="companyname" />
        <Column title="月薪/年薪" dataIndex="pay" key="pay" />
        <Column title="電話" dataIndex="phoneNumber" key="phoneNumber" />
        <Column title="更新日期" dataIndex="update" key="update" />
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
