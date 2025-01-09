import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useImageUtils from './hooks/useImageUtils';

import ArtistsCard from './components/artists-card';
import PlaygroundCard from './components/playground-card';
import PreviewCard from './components/preview-card.png';
import Header from './components/header';
import Footer from './components/footer';
import { Artist } from './utils/types';
import { getInputs } from './utils/utils';

const App = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [supporterLevel, setSupporterLevel] = useState('ultra');
  const [selectedArtist, setSelectedArtist] = useState<Artist>({
    name: 'm8',
    bannerNumber: 1,
  });

  const { handleDownload, handleCopy, getBannerUrl } = useImageUtils({
    username,
  });

  return (
    <>
      <div className="h-screen flex flex-col ">
        <Header />

        <main className="flex flex-col xl:flex-row gap-6 xl:gap-4 m-auto px-6 md:px-10 py-14 xl:py-20 2xl:py-10 w-screen xl:max-w-[1840px] xl:h-[900px]">
          <ArtistsCard
            selectedArtist={selectedArtist}
            onArtistChange={setSelectedArtist}
          />
          <PreviewCard
            username={username}
            role={role}
            bannerUrl={getBannerUrl(selectedArtist, supporterLevel)}
            onDownload={handleDownload}
            onCopy={handleCopy}
          />
          <PlaygroundCard
            username={username}
            role={role}
            artistGroup={selectedArtist.name}
            supporterLevel={supporterLevel}
            onUsernameChange={(newUsername) =>
              setUsername(newUsername.toUpperCase())
            }
            onRoleChange={(newRole) => setRole(newRole.toUpperCase())}
            onSupporterLevelChange={(newSupporterLevel) =>
              setSupporterLevel(newSupporterLevel)
            }
            inputs={getInputs(selectedArtist.name)}
          />
        </main>

        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
