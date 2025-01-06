import { useState } from 'react';
import M8Logo from './components/m8-logo';
import TGSLogo from './components/tgs-logo';
import ArtistsCard from './components/artists-card';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import GithubIcon from './assets/icons/github-icon';
import toast, { Toaster } from 'react-hot-toast';

const m8_1Banner = new URL('assets/images/artists/m8/m8_1.png', import.meta.url)
  .href;
const m8_2Banner = new URL('assets/images/artists/m8/m8_2.png', import.meta.url)
  .href;

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

  const drawSizedImage = () => {
    const sourceCanvas = document.querySelector('canvas');
    if (!sourceCanvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1500;
    tempCanvas.height = 500;
    const tempCtx = tempCanvas.getContext('2d');

    if (!tempCtx) return;

    tempCtx.drawImage(sourceCanvas, 0, 0, 1500, 500);
    return tempCanvas;
  };

  const handleDownload = () => {
    const tempCanvas = drawSizedImage();
    if (!tempCanvas) return;

    const link = document.createElement('a');
    link.download = `m8-${username || 'banner'}.png`;
    link.href = tempCanvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    const tempCanvas = drawSizedImage();
    if (!tempCanvas) return;

    try {
      // Copy method for Apple devices
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const img = document.createElement('img');
        img.src = tempCanvas.toDataURL('image/png');

        const div = document.createElement('div');
        div.contentEditable = 'true';
        div.appendChild(img);
        document.body.appendChild(div);

        const range = document.createRange();
        range.selectNodeContents(div);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        document.execCommand('copy');

        document.body.removeChild(div);
      } else {
        // New copy method
        const tmpCanvas = tempCanvas.toDataURL('image/png');
        const data = await fetch(tmpCanvas);
        const blob = await data.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      }

      toast.success('Bannière copiée dans le presse-papiers', {
        position: 'bottom-center',
      });
    } catch {
      toast.error('Erreur lors de la copie', {
        position: 'bottom-center',
      });
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col ">
        <header className="flex justify-center flex-col w-full mt-14">
          <h1 className="text-foreground-primary text-center text-4xl font-bold leading-10 font-cal">
            Créer une bannière{' '}
            <span className="whitespace-nowrap">
              <M8Logo />
              Gentle Mates,
            </span>
            <br />
            <span className="text-foreground-accent">en quelques clics</span>
          </h1>
          <p className="text-foreground-accent text-xs text-center mt-5 py-1.5 px-3 bg-background-accent rounded-full w-fit mx-auto">
            Powered by
            <span className="font-semibold ml-2">
              <TGSLogo /> The Green Suits
            </span>
          </p>
        </header>

        <main className="flex flex-col xl:flex-row gap-6 xl:gap-4 m-auto px-6 md:px-10 py-14 xl:py-20 2xl:py-10 w-screen xl:max-w-[1840px] xl:h-[900px]">
          <ArtistsCard
            selectedBanner={selectedBanner}
            onBannerChange={setSelectedBanner}
          />
          <PreviewCard
            username={username}
            role={role}
            selectedBanner={
              selectedBanner.bannerNumber === 1 ? m8_1Banner : m8_2Banner
            }
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <p>
            Outil 100% gratuit. Développé par{' '}
            <a
              href="https://x.com/ZzAK_K"
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ZzAK_K
            </a>
            , designé par{' '}
            <a
              href="https://x.com/reaiucas"
              className="font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @reaiucas
            </a>
            .
          </p>
        </footer>
      </div>
      <Toaster />
    </>
  );
};

export default App;
