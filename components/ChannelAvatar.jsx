import Image from 'next/image';

const channels = {
  directv: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/DirecTV_Sports_Latin_America_%282018%29.png/263px-DirecTV_Sports_Latin_America_%282018%29.png',
    name: 'DirecTV logo',
  },
  caracol: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caracol_Televisi%C3%B3n_logo.svg/188px-Caracol_Televisi%C3%B3n_logo.svg.png',
    name: 'Caracol TV logo',
  },
  rcn: {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Canal_RCN_logo_%282%29.svg/210px-Canal_RCN_logo_%282%29.svg.png',
    name: 'RCN TV logo',
  },
};
export const ChannelAvatar = ({type}) => {
  return (
    <div className='-ml-3'>
      <div
        className={`flex justify-center items-center rounded-full w-8 h-8 overflow-hidden border ${
          type === 'directv' ? 'border-slate-900 bg-slate-900' : 'border-transparent'
        } `}>
        <Image
          width={24}
          height={24}
          alt={channels[type].name}
          className='aspect-square object-scale-down '
          src={channels[type].image}
        />
      </div>
    </div>
  );
};
