import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import DisplayBooks from './components/DisplayBooks';
import Footer from './components/Footer';
import Fantasy from './components/Fantasy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main><DisplayBooks /></main>
      <Footer />
    </div>
  );
}

export default App;