const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const finalRounds = ['R16', 'QR', 'semi', '3RD', 'FIN'];

const bgColors = {
  R16: 'bg-indigo-900',
  QR: 'bg-amber-700',
};

export const DateTitle = ({date, type}) => {
  const day = new Date(date).getUTCDay();
  console.log(type);
  return (
    <h3
      className={`sticky top-28 sm:top-[4.4rem]  shadow-sm shadow-slate-900 text-base font-semibold py-1 px-4 z-10 ${
        type === 'R16' ? 'bg-indigo-900' : type === 'QR' ? 'bg-amber-700' : 'bg-slate-800'
      }`}>
      {days[day]}, {date}
    </h3>
  );
};
