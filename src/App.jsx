import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Streamer from './components/Streamer';
import GameCard from './components/GameCard';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <aside className='col-md-2 col-1'>
            <div>
              <h5 className='d-none d-md-block'>Recomended Channels</h5>
              <h5 className='d-md-none d-inline'>📹</h5>
              <Streamer
                viewers='10'
                currentGame='God of War'
                nickname='aldo_geo'
              />
              <Streamer
                viewers='10'
                currentGame='God of War'
                nickname='aldo_geo'
              />
              <Streamer currentGame='God of War' nickname='aldo_geo' />
              <Streamer
                viewers='0'
                currentGame='God of War'
                nickname='aldo_geo'
              />
            </div>
          </aside>
          <main className='col-10'>
            <h1>Browse</h1>
            <div className='d-flex gap-3'>
              <h5>Categories</h5>
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
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
              <GameCard />
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
