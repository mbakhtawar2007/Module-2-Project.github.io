import { Form, Input, Button, Upload, message, Select, Spin } from 'antd';
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Option } = Select;

const UploadRecipe = () => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);

  const onFinish = (values) => {
    if (fileList.length === 0) {
      message.error('Please upload a video!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Recipe uploaded successfully!');
      console.log('Uploaded Recipe:', { ...values, video: fileList });
    }, 2000);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      setVideoPreview(URL.createObjectURL(file));
    } else {
      setVideoPreview(null);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f5f5f5', // Light grey background
        color: 'black',
        minHeight: '100vh',
        fontFamily: 'Roboto, sans-serif', // Apply Roboto font
      }}
    >
      <h1 style={{ color: '#c0392b', textAlign: 'center', fontFamily: 'Lobster, cursive', fontSize: '2.5em', marginBottom: '20px' }}>
        Upload Your Recipe
      </h1>

      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: '500px',
          margin: '20px auto',
          background: 'white', // White background for form
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px #c0392b')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
      >
        <Form.Item
          name="title"
          label={<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#c0392b' }}>Recipe Title</span>}
          rules={[{ required: true, message: 'Please enter the recipe title!' }]}
        >
          <Input
            placeholder="Enter a catchy title"
            style={{ backgroundColor: '#ececec', color: 'black', borderColor: '#c0392b', fontFamily: 'Roboto, sans-serif' }} // Light grey input
          />
        </Form.Item>

        <Form.Item name="description" label={<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#c0392b' }}>Description</span>}>
          <Input.TextArea
            rows={4}
            placeholder="Describe your recipe..."
            style={{ backgroundColor: '#ececec', color: 'black', borderColor: '#c0392b', fontFamily: 'Roboto, sans-serif' }} // Light grey input
          />
        </Form.Item>

        <Form.Item name="category" label={<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#c0392b' }}>Category</span>}>
          <Select
            placeholder="Select a category"
            allowClear
            style={{ backgroundColor: '#ececec', color: 'black', borderColor: '#c0392b', fontFamily: 'Roboto, sans-serif' }} // Light grey input
          >
            <Option value="breakfast">Breakfast</Option>
            <Option value="lunch">Lunch</Option>
            <Option value="dinner">Dinner</Option>
            <Option value="dessert">Dessert</Option>
            <Option value="snacks">Snacks</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="video"
          label={<span style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#c0392b' }}>Upload Video</span>}
          rules={[{ required: true, message: 'Please upload a video!' }]}
        >
          <Upload.Dragger
            name="file"
            accept="video/*"
            maxCount={1}
            fileList={fileList}
            onChange={handleUploadChange}
            style={{
              border: '2px dashed #c0392b',
              padding: '20px',
              backgroundColor: '#ececec', // Light grey background for dragger
              borderRadius: '8px',
            }}
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined style={{ fontSize: '24px', color: '#c0392b' }} />
            </p>
            <p>Click or drag video to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>

        {videoPreview && (
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <video
              src={videoPreview}
              controls
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              backgroundColor: '#c0392b', // Red button
              borderColor: '#c0392b',
              transition: 'all 0.3s',
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            {loading ? <Spin indicator={<LoadingOutlined spin />} /> : 'Upload Recipe'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadRecipe;
