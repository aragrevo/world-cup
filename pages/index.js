import Head from 'next/head';
import {Calendar} from '@components/Calendar';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Fifa World Cup ⚽</title>
        <meta name='description' content='Fifa World Cup ⚽' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <h1 className='text-4xl text-center fixed top-0 left-0 bg-slate-900 z-10 p-4'>Welcome to Fifa World Cup ⚽</h1>
        <Calendar />
      </main>
    </div>
  );
}
