import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCnhM0dsCdJ0ONy7L0ZhTTMwYoQiMcKtxmg&usqp=CAU"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ea rerum consequuntur, est iure praesentium corporis odio vel cumque adipisci totam. Rem necessitatibus architecto expedita voluptates, ipsum omnis asperiores enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ea rerum consequuntur, est iure praesentium corporis odio vel cumque adipisci totam. Rem necessitatibus architecto expedita voluptates, ipsum omnis asperiores enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ea rerum consequuntur, est iure praesentium corporis odio vel cumque adipisci totam. Rem necessitatibus architecto expedita voluptates, ipsum omnis asperiores enim.
            </p> 
        </div>
    )
}
