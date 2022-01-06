import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Sinatra</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/c89b6053-a247-401a-934a-e0f36c3cde57-idaho-northwest-passage-scenic-byway.jpg" alt="" />
        </div>
    )
}
