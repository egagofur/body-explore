import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';
import React from 'react';

const Login = () => {
  return (
    <GuestLayout>
      <div className='flex flex-col px-9 justify-center items-center'>
        <h1 className='text-2xl leading-normal font-dragonSlayer text-primary'>
          WELCOME
        </h1>
        <p className='text-white font-pragatiNarrow text-xl mt-1 focus:ring-0 focus:ring-primary focus:border-0 focus:'>
          Please enter your name to log in the game
        </p>
        <input
          className='border-2 w-full mt-6 font-dragonSlayer text-primary placeholder:text-primary bg-gray/50 border-primary rounded-lg h-12 px-4'
          placeholder='Your Name'
        />
      </div>
      <div className='px-9 mb-28'>
        <Button variant={'default'} link='/'>
          CONFIRM
        </Button>
      </div>
    </GuestLayout>
  );
};

export default Login;
