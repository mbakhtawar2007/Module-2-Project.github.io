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
        backgroundColor: '#1c1c1c',
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#b30000', textAlign: 'center' }}>Upload Your Recipe</h1>

      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{
          maxWidth: '500px',
          margin: '20px auto',
          background: 'linear-gradient(135deg, #2c2c2c, #1a1a1a)', // Gradient background
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px #b30000')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)')}
      >
        <Form.Item
          name="title"
          label="Recipe Title"
          rules={[{ required: true, message: 'Please enter the recipe title!' }]}
        >
          <Input
            placeholder="Enter a catchy title"
            style={{ backgroundColor: '#3a3a3a', color: 'white', borderColor: '#b30000' }}
          />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea
            rows={4}
            placeholder="Describe your recipe..."
            style={{ backgroundColor: '#3a3a3a', color: 'white', borderColor: '#b30000' }}
          />
        </Form.Item>

        <Form.Item name="category" label="Category">
          <Select
            placeholder="Select a category"
            allowClear
            style={{ backgroundColor: '#3a3a3a', color: 'white', borderColor: '#b30000' }}
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
          label="Upload Video"
          rules={[{ required: true, message: 'Please upload a video!' }]}
        >
          <Upload.Dragger
            name="file"
            accept="video/*"
            maxCount={1}
            fileList={fileList}
            onChange={handleUploadChange}
            style={{
              border: '2px dashed #b30000',
              padding: '20px',
              backgroundColor: '#2b2b2b',
              borderRadius: '8px',
            }}
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined style={{ fontSize: '24px', color: '#b30000' }} />
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
              backgroundColor: '#b30000',
              borderColor: '#b30000',
              transition: 'all 0.3s',
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
