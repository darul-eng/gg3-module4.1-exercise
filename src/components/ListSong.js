import '../styles/ListSong.css'

export const songs = [
    {name: "Song 1", isPlayed: true},
    {name: "Song 2", isPlayed: false},
    {name: "Song 3", isPlayed: true}
]

// GENERAL CONDITION
// function ListSongConditionalRendering({isPlayed, name}){
//     if (isPlayed){
//         return <li>{name} PLAYING</li>
//     }
//
//     return <li>{name}</li>
// }

// TERNARY OPERATOR
function ListSongConditionalRendering({isPlayed, name}){
    return <li>{isPlayed ? name + " PLAYING" : name}</li>
}
export default function ListSong(){
    return(
        <section id="all-songs">
            <h2>All Songs</h2>
            <ul>
                {songs.map((song) => {
                    return (
                        <ListSongConditionalRendering
                            name={song.name}
                            isPlayed={song.isPlayed}
                        />
                    )
                })}
            </ul>
        </section>
    )
}