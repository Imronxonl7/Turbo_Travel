import React, { useState } from 'react';
import { Button, Form, Input, Modal, Switch } from 'antd';
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
const CategoryAddModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
    const queryClient = useQueryClient()

  const onFinish = async (values) => {
   const payload = {
  name_uz: values.name_uz,
  name_ru: values.name_ru,
  name_en: values.name_en,
  slug: values.slug,
  order_number: +values.order_number,
  is_active: false
}

   
  try {
    await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/category` , payload)
    toast.success("You added category")
    queryClient.invalidateQueries({
        queryKey:"categories"
      })
    setOpen(false)
  } catch (error) {
    console.log(error);
    
  }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = checked => {
  console.log(`switch to ${checked}`);
}
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
        Add category
      </Button>
      <Modal
        title="Add category"
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
          label="Photo"
          name="slug"
          layout="vertical"
          rules={[
            { required: true, message: "Please input your photo!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name (UZ)"
          name="name_uz"
          layout="vertical"
          rules={[{ required: true, message: "Please input your name (UZ)!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name (EN)"
          name="name_en"
          layout="vertical"
          rules={[{ required: true, message: "Please input your name (EN)!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name (RU)"
          name="name_ru"
          layout="vertical"
          rules={[{ required: true, message: "Please input your name (RU)!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Order"
          name="order_number"
          layout="vertical"
          rules={[{ required: true, message: "Please input your order!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Active"
          name="is_active"
          layout="vertical"
          rules={[{ required: true, message: "Please input your active!" }]}
        >
          <Switch />
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
export default CategoryAddModal;