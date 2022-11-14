import Image from 'next/image';
export const Team = ({flag, name, reverse}) => {
  return (
    <div className={`flex gap-4 flex-1 items-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='rounded-full flex items-center justify-center w-9 h-9'>
        <Image
          src={flag}
          alt={name}
          width={24}
          height={24}
          className='rounded-full aspect-square object-cover w-8 h-8'
        />
      </div>
      <h4 className='whitespace-nowrap text-sm'>{name}</h4>
    </div>
  );
};
