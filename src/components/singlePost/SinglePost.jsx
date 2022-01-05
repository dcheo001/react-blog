import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Author Name</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
            <p className="singlePostDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero rerum, quos quam exercitationem accusantium nobis quibusdam voluptatum consectetur veniam accusamus, impedit magni nemo officia optio aperiam soluta. Adipisci, doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, magnam recusandae consequatur distinctio ex expedita illum corporis excepturi placeat voluptatibus fugit soluta unde dolorum itaque maxime. Quo odit alias aliquid.</p>
            </div>
        </div>
    )
}
