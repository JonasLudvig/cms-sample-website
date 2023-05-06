import './App.scss';
import Banner from './components/banner/Banner';
import Statement from './components/statement/Statement';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Statement />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
