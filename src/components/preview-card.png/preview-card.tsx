import { useFontLoader } from '../../hooks/useFontLoader';
import { BANNER_FONTS } from '../../utils/constants';

const PreviewCard = (props: PreviewCardProps) => {
  const [image, imageStatus] = useImage(props.bannerUrl);
  const [containerWidth, setContainerWidth] = useState(0);
  const [lastValidDimensions, setLastValidDimensions] = useState({
    width: 0,
    height: 0,
  });

  const fontsLoaded = useFontLoader(props.selectedBanner.group, props.selectedBanner.index);

  const fonts = BANNER_FONTS[props.selectedBanner.group]?.[props.selectedBanner.index];
  const isLoaded = fontsLoaded && imageStatus === 'loaded';

  return (
    <Text
      text={props.username}
      fontFamily={fonts?.username.family || 'TuskerGrotesk'}
    />
    <Text
      text={props.role}
      fontFamily={fonts?.role.family || 'Helvetica'}
    />
  );
}; 