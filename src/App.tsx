import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useImageUtils from './hooks/useImageUtils';

import ArtistsCard from './components/artists-card';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import Header from './components/header';
import Footer from './components/footer';

const m8_1Banner = new URL('assets/images/artists/m8/m8_1.png', import.meta.url)
  .href;
const m8_2Banner = new URL('assets/images/artists/m8/m8_2.png', import.meta.url)
  .href;

const App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [selectedBanner, setSelectedBanner] = useState({
    artist: 'm8',
    bannerNumber: 1,
  });

  const { handleDownload, handleCopy } = useImageUtils({ username });

  return (
    <>
      <div className="h-screen flex flex-col ">
        <Header />

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

        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
