import { useState } from 'react';
import M8Logo from './components/m8-logo';
import ArtistsCard from './components/artists-card';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import GithubIcon from './assets/icons/github-icon';

const App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `m8-banner.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <header className="flex justify-center w-full font-cal mt-14">
        <h1 className="text-foreground-primary text-center text-3xl font-bold leading-10">
          Créer une bannière <M8Logo />
          Gentle Mates, <br />{' '}
          <span className="text-foreground-accent">en quelques clics</span>
        </h1>
      </header>

      <main className="flex-1 flex gap-4 my-12 mx-auto w-[1440px] h-[640px]">
        <ArtistsCard />
        <PreviewCard
          username={username}
          role={role}
          onDownload={handleDownload}
        />
        <PlaygroundCard
          username={username}
          role={role}
          onUsernameChange={(newUsername) =>
            setUsername(newUsername.toUpperCase())
          }
          onRoleChange={(newRole) => setRole(newRole.toUpperCase())}
        />
      </main>

      <footer className="p-4 text-center text-foreground-secondary font-figtree text-sm">
        <a href="#" className="flex justify-center mb-1">
          <GithubIcon />
        </a>
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
