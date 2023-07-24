
const mostPlayedSongs = [
    "Song 1",
    "Song 3"
]

export default function MostPlayed(){
    return(
        <section id="most-played">
            <h2>Most Played Songs</h2>
            <ol id="most-played-list">
                {mostPlayedSongs.map((song) => {
                    return(
                        <li>{song}</li>
                    )
                })}
            </ol>
        </section>
    )
}