import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';
import React from 'react';

export default function LanguageChoose() {
  return (
    <GuestLayout>
      <div className='absolute right-1/4 top-20'>
        <h1 className='text-2xl leading-normal font-dragonSlayer text-primary'>
          SELECT LANGUAGE
        </h1>
      </div>
      <div className='px-9 mb-28'>
        <Button variant={'default'} link='/explore'>
          CONFIRM
        </Button>
      </div>
    </GuestLayout>
  );
}
