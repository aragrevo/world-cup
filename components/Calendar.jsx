import {Team} from './Team';
import {Spinner} from './Spinner';

import {DateTitle} from './DateTitle';
import {ChannelList} from './ChannelList';

export const Calendar = ({matches}) => {
  if (!matches || matches.length <= 0) return <Spinner />;
  return (
    <section className='relative mt-28 sm:mt-20 md:mt-20'>
      {Object.keys(matches)
        .sort()
        .map(o => (
          <div key={o} className='my-3 shadow-sm shadow-slate-900'>
            <DateTitle date={o} type={matches[o][0].type} />
            <ul className='px-4'>
              {matches[o]
                .sort((a, b) => (a.local_date >= b.local_date ? 1 : -1))
                .map(m => (
                  <li
                    key={m.id}
                    className={`flex flex-col gap-2 border-b pb-2 last:pb-0 last:border-b-0 border-slate-800 ${
                      m.finished === 'TRUE' ? 'opacity-70 scale-95' : ''
                    }`}>
                    <div className='flex justify-between'>
                      <span className='font-semibold align-middle h-fit self-start'>Group {m.group}</span>
                      <ChannelList exclusive={m.exclusive} />
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                      <Team flag={m.home_flag} name={m.home_team_en} reverse={true} />
                      {m.finished === 'TRUE' ? (
                        <span className='font-semibold align-middle h-fit'>
                          {m.home_score} - {m.away_score}
                        </span>
                      ) : (
                        <span className='font-semibold align-middle h-fit'>{m.time}</span>
                      )}
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
