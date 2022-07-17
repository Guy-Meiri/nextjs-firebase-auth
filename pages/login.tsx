import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: any) =>{
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      hey  
    </div>
  )
};

export default Login;