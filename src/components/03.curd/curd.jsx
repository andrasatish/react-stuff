import React from 'react';
import './curd.css';
import { Button, Space, Form, Input, InputNumber } from 'antd';

const Curd = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='curd-container'>
            <div className='curd-item-container'>
                <h2>Form</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    colon={false}
                    labelAlign={'left'}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input name' }]}
                    >
                        <Input placeholder='Name of the tourist' />
                    </Form.Item>

                    <Form.Item
                        label="Location"
                        name="location"
                        rules={[{ required: true, message: 'Please input location' }]}
                    >
                        <Input placeholder='Location' />
                    </Form.Item>

                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please input age' }]}
                    >
                        <InputNumber placeholder='Age' min={1} max={100} style={{ width: '100%' }} />
                    </Form.Item>


                    <Form.Item
                        label="State"
                        name="state"
                        rules={[{ required: true, message: 'Please input state' }]}
                    >
                        <Input placeholder='State' />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space size={"small"}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <Button type="primary">
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
            <div className='curd-item-container'>
                <h2 style={{ textAlign: 'center' }}>Tourists</h2>
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>State</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sudheer</td>
                            <td>Hyderabad</td>
                            <td>Telangana</td>
                            <td>28</td>
                            <td>
                                <Space size={"small"}>
                                    <Button type="primary" size={"small"}>Edit</Button>
                                    <Button type="primary" size={"small"}>Delete</Button>
                                </Space>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Curd;