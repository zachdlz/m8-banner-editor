import { useEffect, useState } from 'react';
import Button from '../buttons';
import { CopyIcon, DownloadIcon } from '../../assets/icons';
import { Layer, Stage, Image, Text } from 'react-konva';
import banner from '../../assets/images/banner.png';
import useImage from 'use-image';

type PreviewCardProps = {
  username: string;
  role: string;
  onDownload: () => void;
  onCopy: () => void;
};

const PreviewCard = (props: PreviewCardProps) => {
  const [image, imageStatus] = useImage(banner);
  const [fontLoaded, setFontLoaded] = useState(false);

  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 480;

  const getImageDimensions = () => {
    if (!image) return { width: 0, height: 0 };

    const ratio = Math.min(
      CANVAS_WIDTH / image.width,
      CANVAS_HEIGHT / image.height,
    );

    return {
      width: image.width * ratio,
      height: image.height * ratio,
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
    <div className="w-full border border-transparent rounded-lg p-4 bg-grid bg-repeat bg-center bg-cover relative font-figtree">
      <h2 className="text-foreground-primary text-lg font-bold font-cal text-center pb-4">
        Prévisualisation
      </h2>
      <div className={`flex justify-center items-center h-[440px]`}>
        <Stage
          width={getImageDimensions().width}
          height={getImageDimensions().height}
          style={{ margin: 'auto' }}
        >
          <Layer>
            <Image image={image} {...getImageDimensions()} />
            {isLoaded && (
              <>
                <Text
                  text={props.username}
                  x={622}
                  y={90}
                  fontSize={36}
                  fontFamily="TuskerGrotesk"
                  fill="#1e1d1e"
                  width={165}
                  align="right"
                  wrap="none"
                />
                <Text
                  text={props.role}
                  x={636}
                  y={128}
                  fontSize={13}
                  fontFamily="Helvetica"
                  fontVariant="bold"
                  fill="#1e1d1e"
                  width={150}
                  fontStyle="italic"
                  align="right"
                  wrap="none"
                />
              </>
            )}
          </Layer>
        </Stage>
      </div>
      <div className="flex justify-between items-center bg-black/15 absolute bottom-0 left-0 right-0 px-5 py-5 rounded-b-lg">
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
