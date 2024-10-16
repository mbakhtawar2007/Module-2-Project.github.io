import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadRecipe = () => {
  const onFinish = (values) => {
    message.success('Recipe uploaded successfully!');
    console.log('Uploaded Recipe:', values);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload Your Recipe</h1>
      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: '500px' }}>
        <Form.Item
          name="title"
          label="Recipe Title"
          rules={[{ required: true, message: 'Please enter the recipe title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="video" label="Upload Video">
          <Upload name="file" listType="text" maxCount={1}>
            <Button icon={<UploadOutlined />}>Select Video</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Upload Recipe</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadRecipe;
