import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Await, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      let res = await axios.post(`https://v1.turbotravel.uz/api/auth/signin`, values);
      const token = res?.data?.data?.tokens?.accessToken?.token   
      localStorage.setItem("token" , token)
      navigate("/admin/countries")
      toast.success("Tizimga muvaffaqiyatli kirdigniz")
    } catch (error) {
      console.log(error);
      toast.error("Parol yoki raqamni noto'g'ri kiritdingiz")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 32 }}
        wrapperCol={{ span: 32 }}
        style={{
          maxWidth: 500,
          width: "100vh",
          border: "1px",
          borderRadius: "10px",
          borderStyle: "solid",
          borderColor: "#E4E7E9",
          padding: "20px",
          boxShadow: " 0px 8px 24px 0px #191C1F1F",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Phone Number"
          name="phone_number"
          layout="vertical"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          layout="vertical"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
