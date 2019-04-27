import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

/*style*/
import "./PostItem.scss"

class PostItem extends Component {
    render() {
        const {feature_image,excerpt,tags,title,id} = this.props.item;
        return (
            <div className="postItem">
                <NavLink to={`/detail/${id}`}>
                    <img src={feature_image} alt={title}/>
                    <h1 >{title }</h1>
                    <p className="desc">{excerpt}</p>
                    {tags.map((tags,key)=>{
                        return <span className="tag" key={key}>{tags.name}</span>
                    })}
                </NavLink>
            </div>
        );
    }
}
export default PostItem;