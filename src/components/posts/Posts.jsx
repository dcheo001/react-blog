import Post from "../post/Post"
import "./posts.css"
import { useEffect, useState } from "react"

export default function Posts({author, setAuthor}) {
    const [postData, setPostData] = useState([{id: 0, title: '', content: '', date: 0, author_id: 0}])
    
    useEffect(()=> {
        fetch(`http://localhost:9292/authors/${author.id}`)
        .then((response)=> response.json())
        .then((data)=> {setPostData(data)})
      },[author])

    return (
        <div className="posts">
           {postData.map((post)=>{return <Post key={post.id} info={post}/>})}
        </div>
    )
}
