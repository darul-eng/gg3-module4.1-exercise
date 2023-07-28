import './App.css';
import {Navbar} from "./components/Navbar";
import AddSong from "./components/AddSong";
import ListSong from "./components/ListSong";
import MostPlayed from "./components/MostPlayed";
function App() {
  return (
      <>
          <Navbar/>
          <div className="container">
                <AddSong/>
                <div className="container-section">
                    <ListSong/>
                    <MostPlayed/>
                </div>
          </div>
      </>
  );
}

export default App;
