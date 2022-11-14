import useSWR from 'swr';
import {teams} from 'data/teams';
import {useState} from 'react';
import {Team} from './Team';

const fetcher = url => fetch(url).then(res => res.json());

export const Calendar = () => {
  //   const [teams, setTeams] = useState(data);
  const {data, error} = useSWR('/api/hello', fetcher);

  //Handle the error state
  //   if (error) return <div>Failed to load</div>;
  //   //Handle the loading state
  if (!teams) return <div>Loading...</div>;
  //   const {teams} = data;
  return (
    <div>
      Calendar
      <Team team={teams[1]} reverse={true} />
    </div>
  );
};
