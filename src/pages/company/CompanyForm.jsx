import React from "react";
import { useDispatch } from "react-redux";
import { appendCompanyData } from "../../redux/actions/controlCompany";
import { setAppendCompany } from "../../redux/actions/loginVerify";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select,message } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "不得為空",
};
const cityOption = [
  "臺北市",
  "新北市",
  "桃園市",
  "臺中市",
  "臺南市",
  "高雄市",
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
  "基隆市",
  "新竹市",
  "嘉義市",
];
const seniority = ["經歷不限", "1年", "2年", "3年", "4年", "5年以上"];

export default function CompanyForm() {
  const navigate = useNavigate()
  const [loginApi, contextLogin] = message.useMessage();
  const success = () => {
    loginApi.open({
      type: "success",
      content: "新增成功，正在跳轉，請稍後",
    });
  };
  const getNowTime = () => {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString();
    const day = today.getDate().toString();
    const result = year + "/" + month + "/" + day;
    return result;
  };
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const { company } = values;
    const data = {
      city: company.city,
      companyname: company.companyname,
      pay: company.pay,
      information: company.introduction,
      id: Math.random(Date.now()).toString(2),
      detail: [
        company.fullJob,
        company.address,
        company.remote,
        company.responsibility,
        company.expatriate,
        company.WorkingHours,
        company.vocation,
        company.workingDay,
        company.recruitLimit,
      ],
      title: company.title,
      seniority: company.seniority,
      update: getNowTime(),
      phoneNumber: company.phoneNumber,
      emailAddress: company.emailAddress,
      user_ID:Math.random(Date.now()).toString(2),
      key:Math.random(Date.now()).toString(2)
    };
    dispatch(appendCompanyData(data));
    dispatch(setAppendCompany(data.user_ID))
    success()
    setTimeout(() => {
      navigate('/show')
    }, 3000);
  };
  return (
    <>
      {contextLogin}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["company", "companyname"]}
          label="公司名稱"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "title"]}
          label="刊登標題"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "emailAddress"]}
          label="聯絡信箱"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "phoneNumber"]}
          label="連絡電話"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "seniority"]}
          label="工作經驗"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            {seniority.map((item, index) => {
              return (
                <Select.Option value={item} key={index}>
                  {item}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "city"]}
          label="城市"
          rules={[{ required: true }]}
        >
          <Select>
            {cityOption.map((item, index) => {
              return (
                <Select.Option value={item} key={index}>
                  {item}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "pay"]}
          label="薪水範圍"
          rules={[{ required: true }]}
        >
          <Input placeholder="35,500~70,000" />
        </Form.Item>
        <Form.Item
          name={["company", "fullJob"]}
          label="工作性質"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="全職">全職</Select.Option>
            <Select.Option value="打工">打工</Select.Option>
            <Select.Option value="短期工讀">短期工讀</Select.Option>
            <Select.Option value="長期工讀">長期工讀</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "address"]}
          label="上班地址"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "remote"]}
          label="遠端工作"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="有遠端">有遠端</Select.Option>
            <Select.Option value="無遠端">無遠端</Select.Option>
            <Select.Option value="面談討論">面談討論</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "responsibility"]}
          label="管理責任"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="有責任">有責任</Select.Option>
            <Select.Option value="無責任">無責任</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "expatriate"]}
          label="出差外派"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="有出差">有出差</Select.Option>
            <Select.Option value="無出差">無出差</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["company", "WorkingHours"]}
          label="上班時段"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "vocation"]}
          label="休假制度"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "workingDay"]}
          label="可上班日"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["company", "recruitLimit"]}
          label="應徵人數"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["company", "introduction"]} label="工作內容">
          <Input.TextArea rows={10} />
        </Form.Item>

        <Form.Item wrapperCol={{offset: 8,span:16}}>
          <Button type="primary" htmlType="submit">
            刊登
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
