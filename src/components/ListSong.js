import '../styles/ListSong.css'

const songs = [
    "Song 1",
    "Song 2",
    "Song 3"
]
export default function ListSong(){
    return(
        <section id="all-songs">
            <h2>All Songs</h2>
            <ul>
                {songs.map((song) => {
                    return(
                        <li>{song}</li>
                    )
                })}
            </ul>
        </section>
    )
}