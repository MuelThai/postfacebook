import { useState } from "react";

let CommentForm = ({getCommentData}) => {

    let[comment, setComment] = useState("");
    let getComment = (e)=>{
        setComment(e.target.value)
    }
    return(
        <section className="comentarios">
            <textarea className="form-control" 
            placeholder="Comenta algo..." 
            value={comment} 
            onChange={getComment}> 

            </textarea>
            <br />
            <button className="btn btn-secondary"
                onClick={()=>getCommentData(comment)}
            >Comentar</button>
        </section>
    )
    ;
};

export default CommentForm;