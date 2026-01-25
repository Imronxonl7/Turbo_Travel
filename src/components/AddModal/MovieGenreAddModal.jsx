import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
const MovieGenreAddModal = ({movie , genre, getMovieGenre}) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm()
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const onFinish = async (values) => {
   
   
  try {
    await axios.post(`https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_genre` , values)
    toast.success("You added movie_genre")
    getMovieGenre()
    setOpen(false)
    form.resetFields()
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
        Add movie_genre
      </Button>
      <Modal
        title="Add movie_genre"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={<></>}
      >
        <Form
        form={form}
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
        <div style={{display:'flex' ,flexDirection:"column" , alignItems:'center'   , gap:'10px'}}>
        
        <Form.Item
          style={{width:"100%"}}
          label="Created_at name"
          name="created_at"
          layout="vertical"
          rules={[{ required: true, message: "Please input your created_at!" }]}
        >
          <Input />
        </Form.Item>
         <div style={{display:"flex" , gap:"20px"}}>
            <Form.Item
            style={{maxWidth:"200px"}} 
            layout="vertical"
            name="movie_id" 
            label="Movie name" 
            rules={[{ required: true }]}>
            
        <Select
          allowClear
          placeholder="Select a option and change input text above"
          options={movie?.map((el) => {
            return  { label:el.title_uz, value: el.id }
          })}
        />
      </Form.Item> 
      <Form.Item 
      style={{maxWidth:"200px"}} 
      name="genre_id" 
      label="Genre name" 
      rules={[{ required: true }]}
      layout="vertical">
        <Select
          allowClear
          placeholder="Select a option and change input text above"
          options={genre?.map((el) => {
            return  { label:el.name_uz, value: el.id }
          })}
        />
      </Form.Item>
         </div>
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
export default MovieGenreAddModal;