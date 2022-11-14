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

      <main className='p-4'>
        <h1 className='text-4xl text-center'>Welcome to Fifa World Cup ⚽</h1>
        <Calendar />
      </main>
    </div>
  );
}
