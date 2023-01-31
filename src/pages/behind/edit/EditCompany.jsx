import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatingCompanyData } from "../../../redux/actions/controlCompany";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select, message } from "antd";

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

export default function EditCompany() {
  // 更新資料
  const [saveUserID,setSaveUserID] = useState(null)
  const [saveID,setSaveID] = useState(null)
  const [form] = Form.useForm();
  const { id } = useParams();
  const findUpdateData = useSelector((state) => state.controlCompany.companyDatabase.api);
  useEffect(() => {
    const result = findUpdateData.find((article) => article.user_ID === id);
    if (result) {
      setSaveUserID(id)
      setSaveID(result.id)
      const { detail } = { ...result };
      form.setFieldsValue({
        company: {
          companyname: result.companyname,
          title: result.title,
          emailAddress: result.emailAddress,
          phoneNumber: result.phoneNumber,
          seniority: result.seniority,
          city: result.city,
          pay: result.pay,
          fullJob: detail[0],
          address: detail[1],
          remote: detail[2],
          responsibility: detail[3],
          expatriate: detail[4],
          WorkingHours: detail[5],
          vocation: detail[6],
          workingDay: detail[7],
          recruitLimit: detail[8],
          introduction: result.information,
        },
      });
    }
  },[findUpdateData, id, form]);
  // 確定修改頁面
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginApi, contextLogin] = message.useMessage();
  const success = () => {
    loginApi.open({
      type: "success",
      content: "修改成功，正在跳轉，請稍後",
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

  const onFinish = (values) => {
    const { company } = values;
    const data = {
      city: company.city,
      companyname: company.companyname,
      pay: company.pay,
      information: company.introduction,
      id: saveID,
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
      user_ID: saveUserID,
      key: Math.random(Date.now()).toString(2),
    };
    dispatch(setUpdatingCompanyData({data,saveUserID}));
    success();
    setTimeout(() => {
      navigate("/admin/behind");
    }, 1500);
  };
  return (
    <>
      {contextLogin}
      <Form
        form={form}
        {...layout}
        name="updating"
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
          <Input values="123" />
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            確定修改
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
