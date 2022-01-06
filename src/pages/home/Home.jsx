import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

export default function Home({author}) {
    return (
    <>
        <Header />
        <div className="home">
            <Posts author={author}/>
            <Sidebar />
        </div>
    </>
    )
}
