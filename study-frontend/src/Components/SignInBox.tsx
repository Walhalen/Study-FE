import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Registration from '../FetchFunctions/Authentication/Registration';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};



type FieldType = {
    firstName ?: string;
    lastName ?: string;
    email?: string;
    password?: string;
    remember?: string;
};



type Props = {
    handleClikc : () => void; 
};


const SignIn = ({handleClikc} : Props) => {
    const [response, setResponse] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    const onFinish = (values: any) => {
        setFirstName(values.firstName);
        setLastName(values.lastName);
        
        setEmail(values.email);
        setPassword(values.password);
        
    };
      
    useEffect(() => {
        
        const handleSubmit = async() => {
            if(firstName !== "" && lastName !== "" && email !== "" && password !== ""){
                try{

                    const response = await Registration({firstName,lastName,email,password}); 
                    console.log(response);
                    sessionStorage.setItem("jwt", response.token); 
                    
                    navigate(routes.home);
                }catch(error)
                {
                    console.log("Error: ", error); 
                    
                }
            }
        }

        handleSubmit()
    }, [firstName, lastName, email, password])
    
    const [message, setMessage] = useState("")
    // sessionStorage.setItem("jwt", "alsjdbalsjfbljb");
    return(

        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true}}
        
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >

        <Form.Item<FieldType>
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input />
        </Form.Item>
        
    
        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>
    
        <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button  type="primary" htmlType="submit" >
                Submit
            </Button>
            <Button onClick={handleClikc} type = "primary" style={{marginLeft: '10px'}}>
                Log in
            </Button>
        </Form.Item>
        </Form>)
};
  
  export default SignIn;