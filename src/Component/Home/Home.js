import React,{Component,Fragment} from  'react';
import { connect } from 'react-redux';

import ContentLoader from "react-content-loader"
/*style*/
import "./Home.scss"
/*Actions*/
import {fetchPost,LoadingAction} from '../../Action/index';

/*component*/
import PostItem from "./PostItem/PostItem";
import Pagination from "../Pagination/Pagination";

class Home extends Component {

    /*load data when component mount*/
    componentDidMount(){
        const {page} =this.props.PostsProps;
        this.props.fetchPost(page);

    }
    /*re render view when props changes*/
    componentDidUpdate(prevProps){
        const {page} =this.props.PostsProps;
        if(prevProps.PostsProps.page !== this.props.PostsProps.page){
            this.props.LoadingAction();
            this.props.fetchPost(page);
            window.scrollTo(0, 0)
        }
    }
    render() {
        const {posts} =this.props.PostsProps.Posts;
        const {loading} =this.props.PostsProps;
        /*skeleton loader for items*/
        const ItemLoader = () => (
            <ContentLoader
                height={375}
                width={280}
                speed={4}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="375" height="250" />
                <rect x="40" y="270" rx="0" ry="0" width="200" height="10" />
                <rect x="8" y="290" rx="0" ry="0" width="265" height="5" />
                <rect x="8" y="300" rx="0" ry="0" width="265" height="5" />
                <rect x="8" y="310" rx="0" ry="0" width="265" height="5" />
                <rect x="8" y="320" rx="0" ry="0" width="265" height="5" />
                <rect x="8" y="340" rx="10" ry="10" width="80" height="20" />
            </ContentLoader>
        )
        /*skeleton loader for pagination*/
        const PaginationLoader = () => (
            <ContentLoader
                height={30}
                speed={4}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="165" y="0" rx="8" ry="8" width="80" height="13" />
            </ContentLoader>
        )
        return (
            <Fragment>
                <div className="postWrapper">
                    {(!loading) && posts.map((item,key) =>{
                        return <PostItem key={key} item={item}/>
                    })}
                    {
                        (loading) && <Fragment >
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>
                            <div className="postItem">
                                <ItemLoader/>
                            </div>

                        </Fragment>
                    }

                </div>
                {(!loading) &&
                    <div className="paginationWrapper">
                        <Pagination pagination={this.props.PostsProps.Posts.meta.pagination}/>
                    </div>
                }
                {(loading) &&
                    <Fragment>
                        <PaginationLoader/>
                    </Fragment>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        PostsProps: state.Posts,
    }
}

/*map dispatch to props */
const mapDispatchToProps = dispatch => ({
    fetchPost: (page) => dispatch(fetchPost(page)) ,
    LoadingAction: () => dispatch(LoadingAction()) ,
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
