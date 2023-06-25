export default function Streamer(props) {
  const { viewers, currentGame, nickname } = props;
  const profileImg = `https://api.dicebear.com/6.x/fun-emoji/svg?seed=${nickname}`;
  return (
    <>
      <div
        className={
          viewers
            ? 'streamer d-flex py-2 object-fit-contain justify-content-between'
            : 'streamer d-flex py-2 offline object-fit-contain justify-content-between'
        }
      >
        <img src={profileImg} alt='avatar' className='profile-img me-2' />
        <div className='pe-5 d-none d-md-block'>
          <h6 className='m-0'>{nickname}</h6>
          {viewers && <p className='m-0 text-nowrap'>{currentGame}</p>}
        </div>
        <div className='viewers d-none d-md-block'>
          {viewers ? (
            <h6>
              <span className='dot'></span>
              {' ' + viewers}
            </h6>
          ) : (
            <h6>offline</h6>
          )}
        </div>
      </div>
    </>
  );
}
