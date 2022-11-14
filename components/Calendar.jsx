import {useEffect, useState} from 'react';
import {Team} from './Team';
import {Spinner} from './Spinner';
import {matches as data} from 'data/matches';
import {DateTitle} from './DateTitle';
import {ChannelList} from './ChannelList';

const HOUR_DIFFERENCE = 8;

export const Calendar = () => {
  const [matches, setMatches] = useState({});

  useEffect(() => {
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
    setMatches(groupByDate);
    return () => {
      console.log('unmounted Calendar');
    };
  }, []);

  if (!matches || matches.length <= 0) return <Spinner />;
  return (
    <section className='relative mt-28 sm:mt-20 md:mt-20'>
      {Object.keys(matches)
        .sort()
        .map(o => (
          <div key={o} className='my-3 shadow-sm shadow-slate-900'>
            <DateTitle date={o} />
            <ul className='px-4'>
              {matches[o]
                .sort((a, b) => (a.local_date >= b.local_date ? 1 : -1))
                .map(m => (
                  <li
                    key={m.id}
                    className='flex flex-col gap-2 border-b pb-2 last:pb-0 last:border-b-0 border-slate-800'>
                    <div className='flex justify-between'>
                      <span className='font-semibold align-middle h-fit self-start'>Group {m.group}</span>
                      <ChannelList exclusive={m.exclusive} />
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                      <Team flag={m.home_flag} name={m.home_team_en} reverse={true} />
                      <span className='font-semibold align-middle h-fit'>{m.time}</span>
                      <Team flag={m.away_flag} name={m.away_team_en} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
};
