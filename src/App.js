import './App.css';
import {Navbar} from "./components/Navbar";
import AddSong from "./components/AddSong";
import ListSong from "./components/ListSong";
import MostPlayed from "./components/MostPlayed";
import {songs} from "./components/ListSong";
import {useEffect, useState} from "react";
import auth from "./hooks/auth";

function App() {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

    const [token, setToken] = useState("")

    const login = async () => {
        await auth.authorization(CLIENT_ID, REDIRECT_URI)
    }

    useEffect(() => {
        auth.getToken(token, setToken, CLIENT_ID, REDIRECT_URI)
    }, [token])

    const logout = () => {
        setToken("");
        localStorage.removeItem("access_token");
    }

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
          {localStorage.getItem("access_token") === "" || !localStorage.getItem("access_token")?
              <button onClick={login}>Login to Spotify</button> :
              <button onClick={logout}>Logout from Spotify</button>
          }

      </>
  );
}

export default App;
