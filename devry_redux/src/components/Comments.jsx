import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux";

const Comments = ({fetchComments, loading, comments}) => {
    useEffect(() => {
        fetchComments()
    }, [])
    const commetsItems = loading ? (<div>is loading...</div>) : (
        comments.map(comment => (
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        ))
    )

    return <div className="comments">
        {commetsItems}
    </div>;
};

const mapStateToProps = ({comments}) => {
    console.log("🚀 ~ file: Comments.jsx:25 ~ mapStateToProps ~ comments:", comments)
    return {
        comments: comments.items,
        loading: comments.loading
    };
};

const mapDispatcToProps = {
    fetchComments
}

export default connect(mapStateToProps, mapDispatcToProps)(Comments);
