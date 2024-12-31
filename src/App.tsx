import styled from 'styled-components';
import M8Logo from './components/m8-logo';

const Title = styled.h1`
  color: var(--text-primary);
  text-align: center;
  font-family: 'Cal Sans', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 102%;

  .subtitle {
    color: var(--text-accent);
  }
`;

const Footer = styled.p`
  color: var(--text-secondary);
  margin-top: 20px;
  margin-bottom: 80px;
  text-align: center;
  font-family: 'Figtree', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;

  a {
    font-weight: 700;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100dvh;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 58px;
`;

const App = () => {
  return (
    <Container>
      <Title>
        Créer une bannière <M8Logo />
        Gentle Mates,
        <br />
        <span className="subtitle">en quelques clics</span>
      </Title>
      <Footer>
        Outil 100% gratuit. Développé par <a>@ZzAK_K</a>, designé par{' '}
        <a>@reaiucas</a>.
      </Footer>
    </Container>
  );
};

export default App;
