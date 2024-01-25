import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from '../assets/successIcon.svg';

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:container mx-auto p-4 lg:py-0 flex flex-col items-center justify-center h-screen text-[#344054]">
      <div className="w-full lg:w-1/2">
        <img src={successIcon} alt="log" className="mx-auto" />
        <h1 className="text-4xl flex justify-center">Account verified</h1>
        <div className="flex justify-center">
          <p className="text-[#667085] text-base mt-3">
            Click below to log in.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-5">
        <Button
          className="bg-[#6941C6] text-white h-[44px] w-full"
          onClick={() => navigate('/login')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Success;
