import { GithubIcon } from '../../assets/icons';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-foreground-secondary font-figtree text-sm mb-2">
      <a
        href="https://github.com/zachdlz/m8-banner-editor"
        className="flex justify-center mb-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <p>
        Outil 100% gratuit. <br className="sm:hidden" />
        Projet soutenu par{' '}
        <a
          href="https://thegreensuits.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit mx-auto font-semibold"
        >
          The Green Suits
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
