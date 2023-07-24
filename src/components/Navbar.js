import '../styles/Navbar.css'

const menus = [
    {
        title: "All Songs",
        menuUrl: "http://localhost:3000/all-songs"
    },
    {
        title: "Most Played Songs",
        menuUrl: "http://localhost:3000/most-played"
    },
    {
        title: "Add Song to Playlist",
        menuUrl: "http://localhost:3000/add-song"
    }
]

function Menu(){
    return(
        <ul>
            {menus.map((menu) => {
                return(
                    <li><a href={menu.menuUrl}>{menu.title}</a></li>
                )
            })}
        </ul>
    )
}

export default function Navbar(){
    return(
        <header>
            <div className="container">
                <h1>My Spotify</h1>
                <nav>
                   <Menu/>
                </nav>
            </div>
        </header>
    )
}