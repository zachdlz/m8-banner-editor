import GithubIcon from '../../assets/icons/github-icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
