import {ChannelAvatar} from './ChannelAvatar';

export const ChannelList = ({exclusive}) => {
  return (
    <div className='flex absolute right-2 z-0'>
      {!exclusive && (
        <>
          <ChannelAvatar type='rcn' />
          <ChannelAvatar type='caracol' />
        </>
      )}
      <ChannelAvatar type='directv' />
    </div>
  );
};
