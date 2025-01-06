import toast from 'react-hot-toast';

type UseImageUtilsProps = {
  username?: string;
};

const useImageUtils = ({ username }: UseImageUtilsProps = {}) => {
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

  return {
    handleCopy,
    handleDownload,
  };
};

export default useImageUtils;
