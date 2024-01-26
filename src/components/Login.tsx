import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, CheckboxProps } from 'antd';

import { login } from '../services';
import logoMark from '../assets/Logomark.svg';
import { useUser } from '../context/AuthContext';

const LoginForm: React.FC = () => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await login(payload);

      if (response) {
        toast.success('Login successful');
        setUser(response?.user);
        navigate('/dashboard');
      } else {
        throw new Error('Invalid response from the server');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during login:', error.message);
        toast.error('Login failed');
      }
    }
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <>
      <div className="flex gap-2 p-5">
        <img src={logoMark} alt="log" className="" />
        <h1 className="text-3xl text-[#6941C6]">Preyellc</h1>
      </div>
      <div className="lg:container mx-auto p-4 lg:py-0 flex flex-col items-center justify-center h-screen text-[#344054]">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl ">Login</h1>
          <p className="text-[#667085] text-base mt-3">
            Welcome back! Please enter your details.
          </p>
          <form onSubmit={submit} className="mt-5">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <label className="">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-[44px] pl-4 rounded-lg border border-inputBorder outline-none"
                  placeholder="Enter Email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="">
                  Password
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-[44px] pl-4 pr-3 rounded-lg border border-inputBorder outline-none"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <Checkbox onChange={onChange} className="">
                    Remember for 30 days
                  </Checkbox>
                </div>
                <Button type="link" className="text-[#6941C6]">
                  Forgot password
                </Button>
              </div>
              <Button
                className="bg-[#6941C6] text-white h-[44px]"
                onClick={submit}
              >
                Login
              </Button>
              <div className="flex justify-center">
                <p className="mt-1">Don’t have an account?</p>
                <Button
                  type="link"
                  className="text-[#6941C6]"
                  onClick={() => navigate('/register')}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
