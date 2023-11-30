import TitleCenterIcon from '@/assets/logo/TitleCenterIcon';
import { Button } from '@/components/atoms/button/button';
import GuestLayout from '@/components/layout/guestLayout';

export default function Home() {
  return (
    <GuestLayout>
      <div className='flex justify-center items-center mb-16'>
        <TitleCenterIcon />
      </div>
      <div className='px-9 flex flex-col gap-3 mb-11'>
        <Button variant={'default'} link='/login'>
          PLAY
        </Button>
        <Button variant={'outline'} link='/language-choose'>
          CHANGE LANGUAGE
        </Button>
      </div>
    </GuestLayout>
  );
}
