import Image from 'next/image';
export const Team = ({team, reverse}) => {
  return (
    <div className={`flex gap-4 items-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <Image
        src={team.flag}
        alt={team.name_en}
        width={24}
        height={24}
        className='rounded-full aspect-square object-cover'
      />
      <h3 className='font-semibold '>{team.name_en}</h3>
    </div>
  );
};
