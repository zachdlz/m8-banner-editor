import { useState } from 'react';
import M8Logo from './components/m8-logo';
import ArtistsCard from './components/artists-card';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import GithubIcon from './assets/icons/github-icon';

const App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [selectedBanner, setSelectedBanner] = useState<{
    artist: string;
    bannerNumber: number;
  }>({
    artist: 'm8',
    bannerNumber: 1,
  });

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1500;
    tempCanvas.height = 500;
    const tempCtx = tempCanvas.getContext('2d');

    if (!tempCtx) return;
    tempCtx.drawImage(canvas, 0, 0, 1500, 500);

    const link = document.createElement('a');
    link.download = `m8-banner.png`;
    link.href = tempCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const dataURL = canvas.toDataURL('image/png');
    const response = await fetch(dataURL);
    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="flex justify-center w-full font-cal mt-14">
        <h1 className="text-foreground-primary text-center text-3xl font-bold leading-10">
          Créer une bannière{' '}
          <span className="whitespace-nowrap">
            <M8Logo />
            Gentle Mates,
          </span>
          <br />
          <span className="text-foreground-accent">en quelques clics</span>
        </h1>
      </header>

      <main className="flex flex-col xl:flex-row gap-4 m-auto py-10 px-4 w-screen max-w-[1440px] xl:h-[700px]">
        <ArtistsCard
          selectedBanner={selectedBanner}
          onBannerChange={setSelectedBanner}
        />
        <PreviewCard
          username={username}
          role={role}
          bannerPath={`../../assets/images/artists/${selectedBanner.artist}/${selectedBanner.bannerNumber}.png`}
          onDownload={handleDownload}
          onCopy={handleCopy}
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
        <a
          href="https://github.com/zachdlz/m8-banner-editor"
          className="flex justify-center mb-1"
        >
          <GithubIcon />
        </a>
        <p>
          Outil 100% gratuit. Développé par{' '}
          <a href="https://x.com/ZzAK_K" className="font-semibold">
            @ZzAK_K
          </a>
          , designé par{' '}
          <a href="https://x.com/reaiucas" className="font-semibold">
            @reaiucas
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default App;
