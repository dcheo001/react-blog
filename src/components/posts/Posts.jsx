import Post from "../post/Post"
import "./posts.css"
import { useEffect, useState } from "react"

export default function Posts({author, setAuthor}) {
    useEffect(()=> {
        fetch(`http://localhost:9292/authors/${author.id}`)
        .then((response)=> response.json())
        .then((data)=> {setPostData(data.posts)})
      },[author])
      const [postData, setPostData] = useState([])
    return (
        <div className="posts">
           {postData.map((post)=>{return <Post info={post}/>})}
        </div>
    )
}
