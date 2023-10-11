import React, { useState, useEffect} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Authentication } from '../FetchFunctions/Authentication/Authentication';
import { useNavigate } from 'react-router-dom';
import { routes } from '../constants';

// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

type Props = {
  handleClick : ()=> void

};

const Login = ({handleClick} : Props ) => 
{    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 
  // const onFinish = (values: any) => {

  //   console.log(values.email, values.password, "HELLOOO");
  //   setEmail(values.email);
  //   setPassword(values.password);
  // };

  const handleSubmit = async (values : any) => {
      setEmail(values.email);
      setPassword(values.password);
  };


  useEffect(() => {
    const fetchData = async () => {
      if(email !== "" && password !== "")
      {
        try {
          const response = await Authentication({ email, password });
          
          
          sessionStorage.setItem("jwt", response.token);
          navigate(routes.home);
        } catch (error) {
          console.error('Error:', error);
        }
      }

    };
  
    fetchData(); // Immediately invoke the async function
  }, [email, password]);
  

  return(
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true}}
      onFinish={handleSubmit}
      // onChange={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name = "email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      
  
      <Form.Item<FieldType>
        label="Password"
        name = "password"
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleClick} type="primary"  style={{ marginLeft: '10px' }}>
            Sign in
        </Button>
      </Form.Item>
    </Form>
  );  
};
  
  
  export default Login;