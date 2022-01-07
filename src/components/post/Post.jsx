import "./post.css"
import { Link } from "react-router-dom";
import moment from "moment";

export default function Post({info}) {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                </div>
                <Link className="link" to={`/post/${info.id}`}>
                    <span className="postTitle">
                            {info.title}
                    </span>
                </Link>
                
                <hr/>
                <span className="postDate">{moment(info.date).format('MMMM DD YYYY,  LT')}</span>
            </div>
            <p className="postDesc">
                {info.content}
            </p> 
        </div>
    )
}
