const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const finalRounds = ['R16', 'QR', 'semi', '3RD', 'FIN'];

export const DateTitle = ({date, type}) => {
  const day = new Date(date).getUTCDay();
  return (
    <h3
      className={`sticky top-28 sm:top-[4.4rem] shadow-sm shadow-slate-900 bg-slate-800 text-base font-semibold py-1 px-4 z-10 ${
        finalRounds.includes(type) ? 'bg-indigo-900 from-indigo-900 ' : ''
      }`}>
      {days[day]}, {date}
    </h3>
  );
};
