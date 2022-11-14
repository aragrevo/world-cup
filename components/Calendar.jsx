import {useEffect, useState} from 'react';
import {Team} from './Team';
import {Spinner} from './Spinner';
import {matches as data} from 'data/matches';

export const Calendar = () => {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const groupByDate = data.reduce((group, match) => {
      const {local_date} = match;
      const partsOfDate = local_date.split(' ');
      const date = partsOfDate[0];
      const time = partsOfDate[1];
      group[date] = group[date] ?? [];
      group[date].push({...match, date, time});
      return group;
    }, {});
    console.log(groupByDate);
    setMatches(groupByDate);
    return () => {
      console.log('unmounted Calendar');
    };
  }, []);

  if (!matches || matches.length <= 0) return <Spinner />;
  return (
    <section className='relative mt-28'>
      {Object.keys(matches)
        .sort()
        .map(o => (
          <div key={o}>
            <h3 className='sticky top-28 bg-slate-800 text-base font-semibold py-1 px-4'>{o}</h3>
            <ul className='px-4'>
              {matches[o].map(m => (
                <li key={m.id} className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                    <span className='font-semibold align-middle h-fit self-start'>Group {m.group}</span>
                    <span className='font-semibold align-middle h-fit self-end'>
                      {m.exclusive ? 'DirecTV' : 'Open'}
                    </span>
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
