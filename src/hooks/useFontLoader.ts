import { useState, useEffect } from 'react';
import { BANNER_FONTS } from '../utils/constants';
import { type Banner } from '../utils/types';

export const useFontLoader = (banner: Banner) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const fonts = BANNER_FONTS[banner.group]?.[banner.index];

    if (!fonts) {
      setFontsLoaded(true);
      return;
    }

    const loadFonts = async () => {
      try {
        const fontPromises = Object.values(fonts)
          .filter((font) => font?.url)
          .map((font) => {
            const fontFace = new FontFace(
              font.family,
              `url(${new URL(font.url!, import.meta.url).href})`,
            );
            return fontFace.load().then((loadedFont) => {
              document.fonts.add(loadedFont);
            });
          });

        await Promise.all(fontPromises);
        setFontsLoaded(true);
      } catch (err) {
        console.error('Erreur de chargement des polices:', err);
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, [banner]);

  return fontsLoaded;
};
