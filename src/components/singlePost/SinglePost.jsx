import "./singlePost.css"
import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import moment from "moment"

export default function SinglePost() {
    let history = useHistory()

    const [postState, setPostState] = useState({
        title: '', 
        content: '', 
        author_id: '', 
        author: {id: '', author_name: ''}}
    )
    const targetId = useParams()
    const [updateMode, setUpdateMode] = useState(false)
    const [desc, setDesc] = useState(postState.content);
    const [title, setTitle] = useState(postState.title)

    function handleData (data) {
        setDesc(data.content)
        setTitle(data.title)
        setPostState(data)
    }

    useEffect(()=> {
        fetch(`http://localhost:9292/posts/${targetId.postId}`)
        .then((response)=> response.json())
        .then((data)=> handleData(data))
      },[])

    function handleDelete () { 
        fetch(`http://localhost:9292/posts/${targetId.postId}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedPost) => console.log(deletedPost))
        history.push("/")
    }

    function handlePatch(event) {
        event.preventDefault()
        const options = {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: targetId.id,
              title: title,
              content: desc
            })
          }
          fetch(`http://localhost:9292/posts/${targetId.postId}`, options)
            .then(resp => resp.json())
            .then(updatedPost => {setPostState(updatedPost)})
            setUpdateMode(false)
    }


    return (
        
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="singlePostImg" 
                    />{updateMode ? 
                        <textarea 
                            type="text"
                            className="singlePostTitleInput" 
                            autoFocus 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                >
                        
                        </textarea>
                        : ( 
                        
                        <h1 className="singlePostTitle">
                        {postState.title}

                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                </h1>
                    
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>{postState.author.author_name}</b>
                    </span>
                    <span className="singlePostDate">
                        {moment(postState.date).format('MMMM DD YYYY,  LT')}
                    </span>
                </div>
                {updateMode ?<div> <textarea className="singlePostDescInput" value={desc}
                onChange={(e) => setDesc(e.target.value) }> </textarea><button onClick={handlePatch}>Submit</button></div> 
                
                : 
                    <p className="singlePostDesc">
                    {postState.content} 
                    </p>
                }
                        
            </div>
        </div>
    )
}
