import React, {Component} from 'react';
import User from "./User";

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src=""
                    alt="prince"
                    name="Harry The Prince"/>
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus in iste mollitia nihil perferendis voluptatibus! Ad amet eveniet optio porro quos tenetur vel? Culpa laborum officiis quod repudiandae vero?
                </div>
            </div>
        );
    }
}