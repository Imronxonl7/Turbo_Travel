import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = ({setToken}) => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      let res = await axios.post(`https://dummyjson.com/auth/login`, values);
      const token = res?.data?.accessToken
      localStorage.setItem("token", token);
      setToken(token);
      navigate("/admin/actors" , { replace: true })
      toast.success("Tizimga muvaffaqiyatli kirdigniz")
    } catch (error) {
      console.log(error);
      toast.error("Parol yoki username noto'g'ri kiritdingiz")
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
          width: "100%",
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
          label="Username"
          name="username"
          layout="vertical"
          rules={[
            { required: true, message: "Please input your username!" },
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
