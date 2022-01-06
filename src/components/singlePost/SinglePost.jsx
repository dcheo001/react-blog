import "./singlePost.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SinglePost() {
    const [postState, setPostState] = useState({title: '', content: '', author_id: '', author: {id: '', author_name: ''}})
    const targetId = useParams()
    useEffect(()=> {
        fetch(`http://localhost:9292/posts/${targetId.postId}`)
        .then((response)=> response.json())
        .then((data)=> setPostState(data))
      },[])


    return (
        
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    {postState.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>{postState.author.author_name}</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
            <p className="singlePostDesc">
                {postState.content} </p>
            </div>
        </div>
    )
}
