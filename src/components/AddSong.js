import '../styles/AddSong.css'

function Button(){
    return(
        <input type="submit" value="Add" />
    )
}

function Input(){
    return(
        <input type="text" placeholder="Song name" />
    )
}
export default function AddSong(){
    return(
        <section id="add-songs">
            <h2>Add Songs to Playlist</h2>
            <form id="add-song-form">
                <Input/>
                <Button/>
            </form>
        </section>
    )
}