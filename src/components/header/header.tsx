import M8Logo from '../m8-logo';
import TGSLogo from '../tgs-logo';

const Header = () => {
  return (
    <header className="flex justify-center flex-col w-full mt-14">
      <h1 className="text-foreground-primary text-center text-4xl font-bold leading-10 font-cal">
        Créer une bannière{' '}
        <span className="whitespace-nowrap">
          <M8Logo />
          Gentle Mates,
        </span>
        <br />
        <span className="text-foreground-accent">en quelques clics</span>
      </h1>
      <a
        href="https://thegreensuits.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mx-auto"
      >
        <p className="text-foreground-accent text-xs text-center mt-5 py-1.5 px-3 bg-background-accent rounded-full w-fit mx-auto">
          Powered by
          <span className="font-semibold ml-2">
            <TGSLogo /> The Green Suits
          </span>
        </p>
      </a>
    </header>
  );
};

export default Header;
