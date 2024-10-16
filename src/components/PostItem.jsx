import React from "react";
import MyButton from "./UI/Button/MyButton";
import { useNavigate } from "react-router-dom";


const Postitem = (props) => {
    const router = useNavigate()
    return (
        <div className="post">
          <div className="post__content">
              <strong>{props.post.id}. {props.post.title}</strong>
              <div>
              {props.post.body}
              </div>
          </div>
              <div className="post__btns">
                    <MyButton onClick ={() =>  props.remove(props.post)}>Удалить пост</MyButton>
                    <MyButton onClick ={() =>  router('/posts/')}>Открыть</MyButton>
              </div>
        </div>
    )
}
export default Postitem;