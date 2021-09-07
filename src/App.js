import Routes from './routes';
import useAnimation from './hooks/useAnimation';

function App() {
  useAnimation();

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
