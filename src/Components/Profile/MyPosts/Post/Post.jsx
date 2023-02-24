import React from 'react';
import s from './Post.module.css';


const Post = (props) => {


    return (
        <div>
            <div className={s.item}>
                <img src='https://sites.uci.edu/sbass/files/2022/05/AF7A55DF-ABEE-4850-B93D-846C75426F32-400x400.png' alt='#e' />
                {props.message}
                <div>
                    <span>
                    like
                    
                    </span>
                    {props.likeCount}
                </div>
            </div>
        </div>)
}


export default Post;