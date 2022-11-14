import Image from 'next/image';
export const Team = ({flag, name, reverse}) => {
  return (
    <div className={`flex gap-4 flex-1 items-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='rounded-full flex items-center justify-center w-10 h-10  shadow-sm shadow-[#222]  '>
        <Image
          src={flag}
          alt={name}
          width={125}
          height={125}
          className='rounded-full aspect-square object-cover w-9 h-9 bg-gradient-to-br from-slate-900 to-transparent'
        />
      </div>
      <h4 className='whitespace-nowrap text-sm'>{name}</h4>
    </div>
  );
};
