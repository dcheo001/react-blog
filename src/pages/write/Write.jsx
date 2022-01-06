import "./write.css"
import { useState } from "react"

export default function Write({author}) {
    const [bodyText, setBodyText] = useState('')
    const [title, setTitle] = useState('')
    function handleSubmission(e) {
        e.preventDefault()
        fetch("http://localhost:9292/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: bodyText,
            author_id: author.id
          }),
        })
          .then((r) => r.json())
          .then((postSubmission) => console.log(postSubmission));
    }
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e=>setTitle(e.target.value))}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Tell your story..." 
                    type="text" 
                    className="writeInput writeText"
                    onChange={(e=>setBodyText(e.target.value))}>
                    </textarea>
                </div>
                <button className="writeSubmit" onClick={(e=>handleSubmission(e))}>Publish</button>
            </form>
        </div>
    )
}
