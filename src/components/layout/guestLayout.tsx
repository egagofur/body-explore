import IconExp from '@/assets/logo/IconExp';
import IconKBE from '@/assets/logo/IconKBE';

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen justify-between flex-col bg-bodyExplore bg-no-repeat mx-auto max-w-md'>
      <div className='flex justify-between px-9 pt-5'>
        <IconKBE />
        <div className='flex items-center'>
          <IconExp />
        </div>
      </div>
      {children}
    </main>
  );
};

export default GuestLayout;
