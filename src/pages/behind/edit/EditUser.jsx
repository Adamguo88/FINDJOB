import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatingUserData } from "../../../redux/actions/controlUser";
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

export default function EditUser() {
  // 更新資料
  const [saveUserID, setSaveUserID] = useState(null);
  const [saveID, setSaveID] = useState(null);
  const [form] = Form.useForm();
  const { id } = useParams();
  const findUpdateData = useSelector((state) => state.controlUser.userDatabase.api);
  useEffect(() => {
    const result = findUpdateData.find((article) => article.user_ID === id);
    if (result) {
      setSaveUserID(id);
      setSaveID(result.id);
      form.setFieldsValue({
        user: {
          title:result.title,
          emailAddress:result.emailAddress,
          phoneNumber:result.phoneNumber,
          city:result.city,
          pay:result.payRnge,
          fullJob:result.fullJob,
          remote:result.workFromHome,
          WorkingHours:result.workTime,
          vocation:result.relaxTime,
          workingDay:result.toWorkTime,
          introduction:result.information,
        },
      });
    }
  }, [findUpdateData, id, form]);
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
    const { user } = values;
    const data = {
      title: user.title,
      city: user.city,
      payRnge: user.pay,
      fullJob:user.fullJob,
      workFromHome:user.remote,
      workTime:user.WorkingHours,
      relaxTime:user.vocation,
      toWorkTime:user.workingDay,
      information:user.information,
      id: saveID,
      phoneNumber: user.phoneNumber,
      emailAddress: user.emailAddress,
      updateTime: getNowTime(),
      user_ID: saveUserID,
      key: Math.random(Date.now()).toString(2),
    };
    dispatch(setUpdatingUserData({ data, saveUserID }));
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
          name={["user", "title"]}
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
          name={["user", "emailAddress"]}
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
          name={["user", "phoneNumber"]}
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
          name={["user", "city"]}
          label="希望城市"
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
          name={["user", "pay"]}
          label="薪水範圍"
          rules={[{ required: true }]}
        >
          <Input placeholder="35,500~70,000" />
        </Form.Item>
        <Form.Item
          name={["user", "fullJob"]}
          label="工作性質"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="全職">全職</Select.Option>
            <Select.Option value="寒假工讀">寒假工讀</Select.Option>
            <Select.Option value="暑假工讀">暑假工讀</Select.Option>
            <Select.Option value="長期工讀">長期工讀</Select.Option>
            <Select.Option value="短期工讀">短期工讀</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["user", "remote"]}
          label="遠端工作"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="接受">接受</Select.Option>
            <Select.Option value="不接受">不接受</Select.Option>
            <Select.Option value="公司決定">公司決定</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["user", "WorkingHours"]}
          label="上班時段"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="平日 - 早班">平日 - 早班</Select.Option>
            <Select.Option value="平日 - 晚班">平日 - 晚班</Select.Option>
            <Select.Option value="假日">假日</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["user", "vocation"]}
          label="休假制度"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="公司安排">公司安排</Select.Option>
            <Select.Option value="面談討論">面談討論</Select.Option>
            <Select.Option value="沒意見">沒意見</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["user", "workingDay"]}
          label="可上班日"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="介紹自己">
          <Input.TextArea rows={7} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            刊登
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
