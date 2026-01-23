import React, { useState } from 'react'
import { Button, Form, Input, Modal, Switch } from "antd";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

const MovieOpenModal = ({getData , open , setOpen}) => {
      const [confirmLoading, setConfirmLoading] = useState(false);
      const [modalText, setModalText] = useState("Content of the modal");
       const onFinish = async (values) => {
    const payload = {
      title_uz: values.title_uz,
      title_ru: values.title_ru,
      title_en: values.title_en,

      description_uz: values.description_uz,
      description_ru: values.description_ru,
      description_en: values.description_en,

      poster_url: values.poster_url,
      banner_url: values.banner_url,
      trailer_url: values.trailer_url,
      video_url: values.video_url,

      duration_minutes: +values.duration_minutes,
      release_year: +values.release_year,
      imdb_rating: +values.imdb_rating,

      age_rating: values.age_rating,
      country: values.country,
      language: values.language,

      is_premium: Boolean(values.is_premium),
      is_featured: Boolean(values.is_featured),
      is_active: Boolean(values.is_active),

      view_count: +values.view_count,
      updated_at: +values.updated_at,

      created_by: +values.created_by,
    };

    try {
      await axios.post(
        `https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie`,
        payload,
      );
      toast.success("You added movie");
      getData();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <Modal
        title="Add movie"
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3 , 1fr)",
              gap: "10px",
            }}
          >
            <Form.Item
              label="Title (UZ)"
              name="title_uz"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your title (UZ)!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Title (EN)"
              name="title_en"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your title (EN)!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Title (RU)"
              name="title_ru"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your title (RU)!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description (UZ)"
              name="description_uz"
              layout="vertical"
              rules={[
                {
                  required: true,
                  message: "Please input your description (UZ)!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description (EN)"
              name="description_en"
              layout="vertical"
              rules={[
                {
                  required: true,
                  message: "Please input your description (EN)!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description (RU)"
              name="description_ru"
              layout="vertical"
              rules={[
                {
                  required: true,
                  message: "Please input your description (RU)!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Poster_url"
              name="poster_url"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your poster_url!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Banner_url"
              name="banner_url"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your banner_url!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Trailer_url"
              name="trailer_url"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your trailer_url!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Video_url"
              name="video_url"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your video_url!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Duration_minutes"
              name="duration_minutes"
              layout="vertical"
              rules={[
                {
                  required: true,
                  message: "Please input your duration_minutes!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Release_year"
              name="release_year"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your release_year!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Imdb_rating"
              name="imdb_rating"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your imdb_rating!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age_rating"
              name="age_rating"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your age_rating!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your country!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Language"
              name="language"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your language!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="View_count"
              name="view_count"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your view_count!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Updated_at"
              name="updated_at"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your updated_at!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Created_by"
              name="created_by"
              layout="vertical"
              rules={[
                { required: true, message: "Please input your created_by!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Is_active" name="is_active" layout="vertical"    valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Is_premium" name="is_premium" layout="vertical"   valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Is_featured" name="is_featured" layout="vertical"   valuePropName="checked">
              <Switch />
            </Form.Item>
          </div>

          <Form.Item label={null}>
            <Button
              block
              style={{ marginTop: "10px" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
  )
}

export default MovieOpenModal