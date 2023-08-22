import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className='px-8 py-4 bg-slate-50 h-full'>
      <header className=''>
        <nav></nav>
      </header>
      <main className='h-full container max-w-6xl flex justify-center items-center'>
        <Outlet />
      </main>
    </div>
  );
}
