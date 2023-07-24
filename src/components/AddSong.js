import '../styles/AddSong.css'

export default function AddSong(){
    return(
        <section id="add-songs">
            <h2>Add Songs to Playlist</h2>
            <form id="add-song-form">
                <input type="text" placeholder="Song name" />
                    <input type="submit" value="Add" />
            </form>
        </section>
    )
}