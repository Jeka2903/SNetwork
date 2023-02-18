import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={s.posts}>
            <Post message = 'Hi How are you?'  likeCount = '  24' />
            <Post message = "Hello it's my first post !!!" likeCount = '  12'/>
            <Post message ='Who is your favorite?' likeCount = '  11'/>
            <Post />
            <Post />
            </div>
        </div>)
}


export default MyPosts;