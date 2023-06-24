export default function Streamer(props) {
  const { viewers, currentGame, nickname } = props;
  return (
    <>
      <div className={viewers ? 'd-flex py-2' : 'd-flex py-2 offline'}>
        <img
          src='https://api.dicebear.com/6.x/fun-emoji/svg'
          alt='avatar'
          className='profile-img me-2'
        />
        <div className='pe-5 d-none d-md-block'>
          <h6 className='m-0'>{nickname}</h6>
          {viewers && <p className='m-0'>{currentGame}</p>}
        </div>
        <div className='d-none d-md-block'>
          {viewers ? <h6>· {viewers} </h6> : <h6>offline</h6>}
        </div>
      </div>
    </>
  );
}
