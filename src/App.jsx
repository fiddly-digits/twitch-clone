import Streamer from './components/Streamer';
import GameCard from './components/GameCard';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row flex-nowrap'>
          <div className='col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-dark-subtle'>
            <aside className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
              <span className='fs-5 d-none d-sm-inline'>
                Recomended Channels
              </span>
              <span className='d-md-none d-inline'>📹</span>

              <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                <Streamer
                  viewers='10'
                  currentGame='God of War'
                  nickname='aldo_geo'
                />
                <Streamer
                  viewers='10'
                  currentGame='God of War'
                  nickname='shroud'
                />
                <Streamer nickname='collectiveu' />
                <Streamer
                  viewers='0'
                  currentGame='God of War'
                  nickname='Fextralife'
                />
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
              <GameCard />
              <GameCard
                title='League of Legends'
                img='https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'
                viewers='177K'
                tags='RPG Strategy'
              />
              <GameCard
                title="Marvel's Spider-Man Remastered"
                img='https://static-cdn.jtvnw.net/ttv-boxart/1262047844_IGDB-285x380.jpg'
                viewers='173'
                tags='Action'
              />
              <GameCard
                title='Red Dead Redemption'
                img='https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg'
                viewers='2.2K'
                tags='FPS Shooter RPG'
              />
              <GameCard
                title='FINAL FANTASY XVI'
                img='https://static-cdn.jtvnw.net/ttv-boxart/2090279789_IGDB-285x380.jpg'
                viewers='96.2'
                tags='RPG Action'
                isNew
              />
              <GameCard
                title='Resident Evil 4'
                img='https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-285x380.jpg'
                viewers='1K'
                tags='Shooter Puzzle'
              />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard
                title='Lies of P'
                img='https://static-cdn.jtvnw.net/ttv-boxart/653624336_IGDB-285x380.jpg'
                viewers='1.3K'
                tags='RPG Action'
                isNew
              />
              <GameCard />
              <GameCard />
              <GameCard
                title='God of War Ragnarök'
                img='https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-144x192.jpg'
                viewers='1.3K'
                tags='Action Adventure'
              />
              <GameCard />
              <GameCard isNew />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
