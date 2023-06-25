import Streamer from './components/Streamer';
import GameCard from './components/GameCard';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <aside className='col-md-2 col-1 bg-secondary-subtle'>
            <div>
              <h5 className='d-none d-md-block text-nowrap'>
                Recomended Channels
              </h5>

              <h5 className='d-md-none d-inline'>📹</h5>
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
            </div>
          </aside>
          <main className='col-10'>
            <h1>Browse</h1>
            <div className='d-flex gap-3 pb-3'>
              <h5 className='text-decoration-underline'>Categories</h5>
              <h5>Live Channels</h5>
            </div>
            <div className='d-flex gap-2 flex-wrap'>
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
