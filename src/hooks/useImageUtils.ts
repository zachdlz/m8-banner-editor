import toast from 'react-hot-toast';
import type { TextAttributes, Banner } from '../utils/types';

type UseImageUtilsProps = {
  username?: string;
  artist?: string;
};

const useImageUtils = ({ username, artist }: UseImageUtilsProps = {}) => {
  const BASE_WIDTH = 1500;
  const BASE_HEIGHT = 500;
  const ASPECT_RATIO = BASE_WIDTH / BASE_HEIGHT;

  const getBannerUrl = (
    selectedBanner: Banner | undefined,
    supporterLevel?: string,
  ) => {
    if (!selectedBanner) return '';

    return new URL(
      `../assets/images/banners/${selectedBanner.group}_${selectedBanner.index || 1}${
        supporterLevel ? `_${supporterLevel}` : ''
      }.png`,
      import.meta.url,
    ).href;
  };

  const drawSizedImage = () => {
    const sourceCanvas = document.querySelector('canvas');
    if (!sourceCanvas) return;

    const intermediateCanvas = document.createElement('canvas');
    intermediateCanvas.width = sourceCanvas.width;
    intermediateCanvas.height = sourceCanvas.height;
    const intermediateCtx = intermediateCanvas.getContext('2d');
    if (!intermediateCtx) return;

    intermediateCtx.drawImage(sourceCanvas, 0, 0);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = BASE_WIDTH;
    tempCanvas.height = BASE_HEIGHT;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.imageSmoothingEnabled = true;
    tempCtx.imageSmoothingQuality = 'high';

    tempCtx.drawImage(
      intermediateCanvas,
      0,
      0,
      sourceCanvas.width,
      sourceCanvas.height,
      0,
      0,
      BASE_WIDTH,
      BASE_HEIGHT,
    );

    return tempCanvas;
  };

  const handleDownload = () => {
    const tempCanvas = drawSizedImage();
    if (!tempCanvas) return;

    const link = document.createElement('a');
    link.download = `m8-${username || 'banner'}${artist ? `-by-${artist}` : ''}.png`;
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

  const getImageDimensions = (
    containerWidth: number,
    lastValidDimensions: { width: number; height: number },
  ) => {
    if (!containerWidth) return lastValidDimensions;

    const maxWidth = Math.min(containerWidth, window.innerWidth * 0.9);
    const width = maxWidth;
    const height = width / ASPECT_RATIO;

    return { width, height };
  };

  const calculateFontSize = (
    text: string,
    maxWidth: number,
    initialSize: number,
  ) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return initialSize;

    let fontSize = initialSize;
    context.font = `${fontSize}px TuskerGrotesk`;
    let textWidth = context.measureText(text).width;

    while (textWidth > maxWidth && fontSize > 1) {
      fontSize -= 1;
      context.font = `${fontSize}px TuskerGrotesk`;
      textWidth = context.measureText(text).width;
    }

    return fontSize;
  };

  const getUsernameFontSize = (
    dimensions: { width: number },
    username: string,
    font?: TextAttributes,
  ) => {
    const maxTextWidth = dimensions.width * (font?.maxWidth || 0.206);
    const initialFontSize = dimensions.width * (font?.sizeMultiplier || 0.045);

    if (font?.fixedSize) return initialFontSize;
    return calculateFontSize(username, maxTextWidth, initialFontSize);
  };

  const getRoleFontSize = (
    dimensions: { width: number },
    role: string,
    font?: TextAttributes,
  ) => {
    const maxTextWidth = dimensions.width * 0.12;
    const initialFontSize = dimensions.width * (font?.sizeMultiplier || 0.016);

    if (font?.fixedSize) return initialFontSize;
    return calculateFontSize(role, maxTextWidth, initialFontSize);
  };

  return {
    handleCopy,
    handleDownload,
    getBannerUrl,
    getImageDimensions,
    getUsernameFontSize,
    getRoleFontSize,
    BASE_HEIGHT,
  };
};

export default useImageUtils;
