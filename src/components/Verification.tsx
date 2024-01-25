import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMark from '../assets/Logomark.svg';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { verifyUser } from '../services';
import { toast } from 'react-toastify';

const Verification: React.FC = () => {
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  const handleChange = (newValue: React.SetStateAction<string>) => {
    setOtp(newValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const storedEmail = localStorage.getItem('email');
      const payload = {
        email: storedEmail,
        otp: otp
      };

      const response = await verifyUser(payload);
      if (response?.status === 201) {
        toast.success('Welcome on board');
      }
      navigate('/success');
    } catch (error) {
      toast.error('Login failed')
    }
  };

  return (
    <div className="lg:container mx-auto p-4 lg:py-0 flex flex-col items-center justify-center h-screen text-[#344054]">
      <div className="w-full lg:w-1/2">
        <img src={logoMark} alt="log" className="mx-auto" />
        <h1 className="text-4xl flex justify-center">
          Enter your verification code
        </h1>
        <div className="flex justify-center">
          <p className="text-[#667085] text-base mt-3">
            Enter OTP sent to your mail.
          </p>
          <p className="text-[#667085] text-base mt-3">Resets in 00:30</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-10">
            <div className='mx-auto'>
              <MuiOtpInput
                value={otp}
                onChange={handleChange}
                inputMode="search"
                length={6}
                width={500}
              />
            </div>

            <Button className="bg-[#6941C6] text-white h-[44px]" onClick={handleSubmit}>
              Submit OTP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;
