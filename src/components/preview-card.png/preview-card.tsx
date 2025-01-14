import { useEffect, useState } from 'react';
import Button from '../buttons';
import { CopyIcon, DownloadIcon } from '../../assets/icons';
import { Layer, Stage, Image, Text } from 'react-konva';
import useImage from 'use-image';
import { Loader } from '../loader';
import useImageUtils from '../../hooks/useImageUtils';
import { type TextProps } from '../../utils/types';

type PreviewCardProps = {
  username: TextProps;
  role: TextProps;
  bannerUrl: string;
  onDownload: () => void;
  onCopy: () => void;
};

const PreviewCard = (props: PreviewCardProps) => {
  const [image, imageStatus] = useImage(props.bannerUrl);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [lastValidDimensions, setLastValidDimensions] = useState({
    width: 0,
    height: 0,
  });

  const {
    BASE_HEIGHT,
    getImageDimensions,
    getUsernameFontSize,
    getRoleFontSize,
  } = useImageUtils();

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

  const currentDimensions = getImageDimensions(
    containerWidth,
    lastValidDimensions,
  );
  const displayHeight =
    currentDimensions.height || lastValidDimensions.height || BASE_HEIGHT;

  useEffect(() => {
    const dimensions = getImageDimensions(containerWidth, lastValidDimensions);
    if (dimensions.width !== 0 && dimensions.height !== 0) {
      setLastValidDimensions(dimensions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth]);

  useEffect(() => {
    const fontName = props.username.font || 'TuskerGrotesk';
    const fontPath = `../../assets/fonts/${fontName}.woff2`;

    const font = new FontFace(
      fontName,
      `url(${new URL(fontPath, import.meta.url).href})`,
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
  }, [props.username.font]);

  const isLoaded = fontLoaded && imageStatus === 'loaded';

  console.log(props.username);
  return (
    <div className="order-1 xl:order-none w-full xl:w-[80%] border border-transparent rounded-lg bg-grid bg-repeat bg-center bg-cover relative font-figtree flex flex-col h-full overflow-x-hidden">
      <h2 className="text-foreground-primary text-lg font-bold font-cal text-center pt-4">
        Prévisualisation
      </h2>
      <div className="preview-container flex-grow flex justify-center items-center my-8 mx-4 sm:mx-24 max-w-full">
        <div
          className="rounded-lg overflow-hidden shadow-sm w-full flex justify-center items-center"
          style={{ height: `${displayHeight}px` }}
        >
          {imageStatus === 'loading' ? (
            <Loader
              width={
                getImageDimensions(containerWidth, lastValidDimensions).width
              }
              height={
                getImageDimensions(containerWidth, lastValidDimensions).height
              }
            />
          ) : (
            <Stage
              width={
                getImageDimensions(containerWidth, lastValidDimensions).width
              }
              height={
                getImageDimensions(containerWidth, lastValidDimensions).height
              }
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100%',
              }}
            >
              <Layer>
                <Image
                  image={image}
                  {...getImageDimensions(containerWidth, lastValidDimensions)}
                />
                {isLoaded && (
                  <>
                    <Text
                      text={props.username.value}
                      x={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .width * 0.778
                      }
                      y={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .height *
                          0.34 +
                        (getImageDimensions(containerWidth, lastValidDimensions)
                          .width *
                          0.045 -
                          getUsernameFontSize({
                            width: getImageDimensions(
                              containerWidth,
                              lastValidDimensions,
                            ).width,
                            username: props.username.value,
                            fontSizeFixed: props.username.fontSizeFixed,
                            fontSizeMultiplier:
                              props.username.fontSizeMultiplier,
                            maxWidthMultiplier:
                              props.username.maxWidthMultiplier,
                          }))
                      }
                      fontSize={getUsernameFontSize({
                        width: getImageDimensions(
                          containerWidth,
                          lastValidDimensions,
                        ).width,
                        username: props.username.value,
                        fontSizeFixed: props.username.fontSizeFixed,
                        fontSizeMultiplier: props.username.fontSizeMultiplier,
                        maxWidthMultiplier: props.username.maxWidthMultiplier,
                      })}
                      fontFamily={props.username.font || 'TuskerGrotesk'}
                      fill={props.username.color || '#000000'}
                      width={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .width * 0.206
                      }
                      align="right"
                      wrap="none"
                    />
                    <Text
                      text={props.role.value}
                      x={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .width * 0.795
                      }
                      y={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .height * 0.48
                      }
                      fontSize={getRoleFontSize(
                        getImageDimensions(containerWidth, lastValidDimensions),
                        props.role.value,
                      )}
                      fontFamily="Helvetica"
                      fontVariant="bold"
                      fill="#1e1d1e"
                      width={
                        getImageDimensions(containerWidth, lastValidDimensions)
                          .width * 0.188
                      }
                      fontStyle="italic"
                      align="right"
                      wrap="none"
                    />
                  </>
                )}
              </Layer>
            </Stage>
          )}
        </div>
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
