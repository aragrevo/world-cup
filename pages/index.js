import Head from 'next/head';
import {Calendar} from '@components/Calendar';
import {matches as data} from 'data/matches';

const HOUR_DIFFERENCE = 8;

export default function Home({matches}) {
  return (
    <div className='container'>
      <Head>
        <title>Fifa World Cup ⚽</title>
        <meta name='description' content='Fifa World Cup ⚽' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative max-w-3xl mx-auto'>
        <h1 className='text-4xl text-center fixed top-0 left-0 bg-slate-900 z-20 p-4 w-full'>
          Welcome to Fifa World Cup ⚽
        </h1>
        <Calendar matches={matches} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const groupByDate = data.reduce((group, match) => {
    const {local_date} = match;
    const partsOfDate = local_date.split(' ');
    const date = partsOfDate[0];
    const local_time = partsOfDate[1];
    const partsOfTime = local_time.split(':');
    const hour = Number(partsOfTime[0]);
    const colHour = hour - HOUR_DIFFERENCE;
    const time = `${colHour}:${partsOfTime[1]}`;
    group[date] = group[date] ?? [];
    group[date].push({...match, date, time});
    return group;
  }, {});
  return {
    props: {
      matches: groupByDate,
    }, // will be passed to the page component as props
  };
}
