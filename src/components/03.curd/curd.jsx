import React, { useState } from 'react';
import './curd.css';
import { Button, Space, Form, Input, InputNumber, Select, Radio, Checkbox } from 'antd';

const Curd = () => {
    const [form] = Form.useForm();
    const statesList = [{ label: 'Telangana', value: 'TL' }, { label: 'Andhra Pradesh', value: 'AP' }, { label: 'Delhi', value: 'Delhi' }];
    const genderOptions = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];
    const placeTypeList = [{ label: 'Public Visit', value: 'public' }, { label: 'Priavate Visit', value: 'private' }];

    const [genderData, setGender] = useState('male');
    const [touristList, setTouristList] = useState([]);
    const [editedObj, setEditedObj] = useState({});
     
    const onSubmit = () => {
        const formatAddObj = {
            ...form.getFieldsValue(),
            id: Math.random().toString(16).slice(2)
        }
        setTouristList([formatAddObj,...touristList]);
        form.resetFields();
    };

    const onGenderChange = ({ target: { value } }) => {
        setGender(value)
    }

    const onEdit = (tourist) => {
        setEditedObj(tourist);
        form.setFieldsValue({
            name : tourist.name,
            location : tourist.location,
            age : tourist.age,
            state : tourist.state,
            gender : tourist.gender,
            placeType : tourist.placeType
        })
    }

    const onDelete = (tourist) => {
        const updatedTourists = touristList.filter((tourPerson) => tourPerson.id !== tourist.id);
        setTouristList(updatedTourists);
    }

    const onUpdate = () => {
        const updatedTourists = touristList.map((tourist)=>{
            if(tourist.id === editedObj.id){
                return form.getFieldsValue();
            }else{
                return tourist;
            }
        })
        setTouristList(updatedTourists);
        form.resetFields();
        setEditedObj({});
    }

    return (
        <div className='curd-container'>
            <div className='curd-item-container'>
                <h2>Fill the tour form</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    colon={false}
                    labelAlign={'left'}
                    size={'small'}
                    form={form}
                    
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
                        rules={[{ required: true, message: 'Please select state' }]}
                    >
                        <Select
                            showSearch
                            placeholder="Select State"
                            optionFilterProp="label"
                            options={statesList}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender">
                        <Radio.Group options={genderOptions} onChange={onGenderChange} value={genderData} />
                    </Form.Item>

                    <Form.Item
                        label={
                            <span style={{ textWrap: 'wrap', height: '70px' }}>Select Place Type to Visit</span>
                        }
                        name="placeType"
                    >
                        <Checkbox.Group options={placeTypeList} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Space size={"small"}>
                            <Button type="primary" onClick={onSubmit}>
                                Submit
                            </Button>
                            <Button type="primary" onClick={onUpdate}>
                                Update
                            </Button>
                            <Button type="primary" htmlType="reset">
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
            <div className='curd-item-container'>
                <h2 style={{ textAlign: 'center' }}>Tourists</h2>
                <div className='table-wrapper'>
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Age</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Place Type to Visit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            touristList.map((tourist) => {
                                return (
                                    <tr key={tourist.id}>
                                        <td>{tourist.name}</td>
                                        <td>{tourist.location}</td>
                                        <td>{tourist.age}</td>
                                        <td>{tourist.state}</td>
                                        <td>{tourist.gender}</td>
                                        <td>
                                            {
                                                tourist.placeType.map((place)=>{
                                                    return (
                                                        <span className={'pills'}>{place}</span>
                                                    )
                                                })
                                            }
                                            </td>
                                        <td>
                                            <Space size={"small"}>
                                                <Button type="primary" size={"small"} onClick={()=>{onEdit(tourist)}}>Edit</Button>
                                                <Button type="primary" size={"small"} onClick={()=>{onDelete(tourist)}}>Delete</Button>
                                            </Space>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Curd;