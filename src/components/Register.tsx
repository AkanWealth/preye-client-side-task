import { Button } from 'antd';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { createAccount } from '../services';
import logoMark from '../assets/Logomark.svg';
import { useNavigate } from 'react-router-dom';
import sideImage from '../assets/registerImage.svg';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        email: formData.email,
        fullname: formData.fullname,
        username: formData.username,
        password: formData.password,
      };
      const response = await createAccount(payload);
      // Handle response (e.g., show OTP and redirect)
      if (response) {
        toast.success('Registration successful');
      }
      localStorage.setItem('email', response.data.user.email);
      navigate('/otp');
    } catch (error) {
      console.error('Registration failed', error);
      toast.error('Registration failed');
    }
  };

  return (
    <>
      <div className='flex gap-2 p-5'>
        <img src={logoMark} alt="log" className="" />
        <h1 className='text-3xl text-[#6941C6]'>Preyellc</h1>
      </div>
      <div className=" flex items-center justify-center h-screen text-[#344054]">
        <div className="w-full lg:w-1/2 p-5 lg:pl-20">
          <h1 className="text-4xl ">Sign up</h1>
          <p className="text-[#667085] text-base mt-3">
            Start your 30-day free trial.
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <label className="">Name</label>
                <input
                  required
                  name="fullname"
                  type="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="w-full h-[44px] pl-4 rounded-lg border border-inputBorder outline-none"
                  placeholder="Enter Full Your Full Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="">Username</label>
                <input
                  required
                  name="username"
                  type="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full h-[44px] pl-4 rounded-lg border border-inputBorder outline-none"
                  placeholder="Enter Username"
                />
              </div>
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
              <Button
                className="bg-[#6941C6] text-white h-[44px]"
                onClick={handleSubmit}
              >
                Sign up
              </Button>
              <div className="flex justify-center">
                <p className="mt-1">Already have an account?</p>
                <Button
                  type="link"
                  className="text-[#6941C6]"
                  onClick={() => navigate('/')}
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden lg:flex justify-end w-1/2">
          <img src={sideImage} className="object-cover" alt="Side Image" />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
