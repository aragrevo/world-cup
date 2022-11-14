const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DateTitle = ({date}) => {
  const day = new Date(date).getUTCDay();
  return (
    <h3 className='sticky top-28 bg-slate-800 text-base font-semibold py-1 px-4 z-10'>
      {days[day]}, {date}
    </h3>
  );
};
