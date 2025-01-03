import { useEffect, useState } from 'react';
import Button from '../buttons';
import { CopyIcon, DownloadIcon } from '../../assets/icons';
import { Layer, Stage, Image, Text } from 'react-konva';
import useImage from 'use-image';

type PreviewCardProps = {
  username: string;
  role: string;
  selectedBanner: string;
  onDownload: () => void;
  onCopy: () => void;
};

const PreviewCard = (props: PreviewCardProps) => {
  const [image, imageStatus] = useImage(props.selectedBanner);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const BASE_WIDTH = 1500;
  const BASE_HEIGHT = 500;
  const ASPECT_RATIO = BASE_WIDTH / BASE_HEIGHT;

  useEffect(() => {
    const updateDimensions = () => {
      const container = document.querySelector('.preview-container');
      if (container) {
        const maxWidth = Math.min(
          container.clientWidth,
          window.innerWidth * 0.9,
        );
        setContainerWidth(maxWidth);
      }
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getImageDimensions = () => {
    if (!image || !containerWidth) return { width: 0, height: 0 };

    const maxWidth = Math.min(containerWidth, window.innerWidth * 0.9);
    const width = maxWidth;
    const height = width / ASPECT_RATIO;

    return {
      width,
      height,
    };
  };

  useEffect(() => {
    const font = new FontFace(
      'TuskerGrotesk',
      `url(${new URL('../../assets/fonts/TuskerGrotesk-4800Super.woff2', import.meta.url).href})`,
    );

    font
      .load()
      .then(() => {
        document.fonts.add(font);
        setFontLoaded(true);
      })
      .catch((err) => {
        console.error('Erreur de chargement de la police:', err);
      });
  }, []);

  const isLoaded = fontLoaded && imageStatus === 'loaded';

  return (
    <div className="w-full xl:w-[80%] border border-transparent rounded-lg bg-grid bg-repeat bg-center bg-cover relative font-figtree flex flex-col h-full overflow-x-hidden">
      <h2 className="text-foreground-primary text-lg font-bold font-cal text-center pt-4">
        Prévisualisation
      </h2>
      <div className="preview-container flex-grow flex justify-center items-center my-8 mx-4 sm:mx-24 max-w-full">
        <Stage
          width={getImageDimensions().width}
          height={getImageDimensions().height}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
          }}
        >
          <Layer>
            <Image image={image} {...getImageDimensions()} />
            {isLoaded && (
              <>
                <Text
                  text={props.username}
                  x={getImageDimensions().width * 0.778}
                  y={getImageDimensions().height * 0.34}
                  fontSize={getImageDimensions().width * 0.045}
                  fontFamily="TuskerGrotesk"
                  fill="#1e1d1e"
                  width={getImageDimensions().width * 0.206}
                  align="right"
                  wrap="none"
                />
                <Text
                  text={props.role}
                  x={getImageDimensions().width * 0.795}
                  y={getImageDimensions().height * 0.48}
                  fontSize={getImageDimensions().width * 0.016}
                  fontFamily="Helvetica"
                  fontVariant="bold"
                  fill="#1e1d1e"
                  width={getImageDimensions().width * 0.188}
                  fontStyle="italic"
                  align="right"
                  wrap="none"
                />
              </>
            )}
          </Layer>
        </Stage>
      </div>
      <div className="flex justify-between items-center bg-black/15 px-5 py-5 rounded-b-lg mt-auto">
        <p className="text-foreground-primary text-sm">
          Taille : <span className="font-bold">1500x500</span>
        </p>
        <div className="flex gap-2 text-sm">
          <Button
            variant="primary"
            icon={<DownloadIcon />}
            text="Télécharger"
            onClick={props.onDownload}
          />
          <Button
            variant="secondary"
            icon={<CopyIcon />}
            text="Copier"
            onClick={props.onCopy}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
