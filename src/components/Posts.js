import React, {Component} from 'react';
import Post from "./Post";
import image from '../img/lOt_Tu6BkG8.jpg';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src={image}/>
            </div>
        );
    }
}