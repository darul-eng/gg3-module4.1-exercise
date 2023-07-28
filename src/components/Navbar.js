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

function Menu({menuTitle, menuUrl = "http://localhost"}){
    return(
            <li><a href={menuUrl}>{menuTitle}</a></li>
    )
}

export function Navbar(){
    return(
        <header>
            <div className="container">
                <h1>My Spotify</h1>
                <nav>
                    <ul>
                        {menus.map((menu) => {
                           return (
                               <Menu
                                   menuTitle={menu.title}
                                   menuUrl={menu.title}
                               />
                           )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}