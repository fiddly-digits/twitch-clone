export default function GameCard(props) {
  const { title, tags, img, viewers, isNew } = props;
  let convertedTags = [];
  if (tags) {
    convertedTags = tags.includes(' ') ? tags.split(' ') : [tags];
  } else {
    convertedTags = ['Placeholder'];
  }
  return (
    <>
      <div className='card' style={{ width: '11rem' }}>
        <div className='card-top'>
          <img
            src={
              img
                ? img
                : 'https://static-cdn.jtvnw.net/ttv-boxart/498566-285x380.jpg'
            }
            className='card-img-top'
            alt='game'
          />
          {isNew && (
            <span class='card-badge position-absolute translate-middle badge rounded-pill z-2'>
              New
            </span>
          )}
        </div>
        <div className='card-body'>
          <h5 className='card-title fs-6 text-nowrap overflow-hidden'>
            {title ? title : 'Placeholder'}
          </h5>
          <p className='card-text fs-6'>{viewers ? viewers : '0'} viewers</p>
          <div className='card-tags d-flex gap-1'>
            {convertedTags.map((tag) => (
              <span className='card-tag rounded-pill bg-secondary-subtle px-2 text-nowrap'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
