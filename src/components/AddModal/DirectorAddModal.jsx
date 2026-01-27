import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
const DirectorAddModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
    const queryClient = useQueryClient()

  const onFinish = async (values) => {
   
  try {
    await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/director` , values)
    toast.success("You added director")
    queryClient.invalidateQueries({
        queryKey:"directors"
      })
    setOpen(false)
  } catch (error) {
    console.log(error);
    
  }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <div style={{display:'flex' , justifyContent:'end'}}>
      <Button style={{marginBottom:'20px'}} type="primary" onClick={showModal}>
        Add director
      </Button>
      <Modal
        title="Add director"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={<></>}
      >
        <Form
        name="basic"
        labelCol={{ span: 32 }}
        wrapperCol={{ span: 32 }}
        style={{
          maxWidth: "100%",
          width: "100%",
          borderRadius: "10px",
          padding: "20px",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{display:'grid' , gridTemplateColumns:'repeat(2 , 1fr)' , gap:'10px'}}>
          <Form.Item
          label="Full name"
          name="full_name"
          layout="vertical"
          rules={[
            { required: true, message: "Please input your full name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Photo"
          name="photo_url"
          layout="vertical"
          rules={[{ required: true, message: "Please input your photo!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Year"
          name="birth_year"
          layout="vertical"
          rules={[{ required: true, message: "Please input your year!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Biography"
          name="biography"
          layout="vertical"
          rules={[{ required: true, message: "Please input your biography!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          layout="vertical"
          rules={[{ required: true, message: "Please input your country!" }]}
        >
          <Input />
        </Form.Item>
        </div>
        

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
};
export default DirectorAddModal;