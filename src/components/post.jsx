import { useState, useEffect } from "react";
import CommentForm from "./commentsForms";
import ListComments from "./listcomments";
let Post = () => {
    let [] = useState();
    let[likes, setlikes]= useState(0);
    //manejo del boton de comentario
    let[btnComment,setbtnComment]= useState(false);
    let isShowComment = () => setbtnComment(!btnComment);
    
    
    //obtener comentarios
    let[textComment, setTextComment] = useState("");
    let getCommentData = (comment)=>{
        setTextComment(comment);
    }
    //listado comentarios
    let listCom = [
        {id:1, text : "Me gustan los funko pop"},
        {id:2, text : "Coleccionarlos"}
    ];
    let nextID = 3;
    let[id,setId] = useState(nextID)
    let[lisData, setLisData]= useState(listCom);
    useEffect(()=> {
        if (textComment){
            setLisData([
                ...lisData,
                {id: nextID++,text: textComment}
            ]);
        }

    },[textComment]);

    return(
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBleZm-SsU50qQgIKIYXZrMDn0FqPdy5bRsq7mC1WQQ&s"} className="card-img-top" alt="..." />
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-around">
                    <span>🦇🦇Iam Batman {lisData.length} </span><span>{likes} 👍👍</span>
                </li>
                <li class="list-group-item d-flex justify-content-around">
                    <button className="btn btn-secondary"
                        onClick={()=>setlikes(likes+1)}
                    >👍Likes👍</button>
                    <button className="btn btn-secondary"
                        onClick={isShowComment}
                    >💭Comments💭</button>
                </li>
            </ul>
            <div className="card-footer">
                {btnComment && <CommentForm getCommentData ={getCommentData} />}
            </div>
            <ListComments listComData= {lisData}/>
        </div>

    );
};

export default Post;