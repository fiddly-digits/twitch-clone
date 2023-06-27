import Streamer from './components/Streamer';
import GameCard from './components/GameCard';
import { games } from './data/games';
import { streamers } from './data/streamers';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-dark-subtle'>
            <aside className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              <span className='fs-5 d-none d-sm-inline'>
                Recommended Channels
              </span>
              <span className='d-md-none d-inline'>📹</span>

              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                {streamers.map((streamer, index) => {
                  return (
                    <Streamer
                      key={`streamer-${index}`}
                      nickname={streamer.nickname}
                      currentGame={streamer.currentGame}
                      viewers={streamer.viewers}
                    />
                  );
                })}
              </ul>
            </aside>
          </div>
          <main className='col-10 py-3'>
            <h3>Browse</h3>
            <div className='d-flex gap-3 pb-3'>
              <h5 className='text-decoration-underline'>Categories</h5>
              <h5>Live Channels</h5>
            </div>
            <div className='d-flex gap-3 flex-wrap'>
              {games.map((game, index) => {
                return (
                  <GameCard
                    key={`game-card-${index}`}
                    title={game.title}
                    img={game.img}
                    viewers={game.viewers}
                    tags={game.tags}
                    isNew={game.isNew}
                  />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
