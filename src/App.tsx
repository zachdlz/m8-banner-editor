import M8Logo from './components/m8-logo';
import ArtistsCard from './components/artists-card';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <header className="flex justify-center w-full font-cal mt-10">
        <h1 className="text-foreground-primary text-center text-3xl font-bold leading-10">
          Créer une bannière <M8Logo />
          Gentle Mates, <br />{' '}
          <span className="text-foreground-accent">en quelques clics</span>
        </h1>
      </header>

      <main className="flex-1 flex gap-4 my-14 mx-10">
        <ArtistsCard />

        <div className="w-1/2 bg-green-100 rounded-lg p-4">
          {/* Grand rectangle central */}
        </div>

        <div className="w-1/3 bg-blue-100 rounded-lg p-4">
          {/* Rectangle moyen droite */}
        </div>
      </main>

      <footer className="p-4 text-center text-foreground-secondary">
        <p>
          Outil 100% gratuit. Développé par{' '}
          <a href="#" className="font-semibold">
            @ZzAK_K
          </a>
          , designé par{' '}
          <a href="#" className="font-semibold">
            @reaiucas
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default App;
