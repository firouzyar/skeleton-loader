import React,{Component,Fragment} from 'react'
import connect from "react-redux/es/connect/connect";
/*pars html*/
import ReactHtmlParser from 'react-html-parser';
/*convert time*/
import moment from 'moment';
/*actions*/
import {fetchSinglePost,LoadingAction} from "../../Action";
/*styles*/
import './Detail.scss'
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
/*skeleton*/
import ContentLoader from "react-content-loader";

class Detail extends Component {
    componentWillMount(){
        this.props.fetchSinglePost(this.props.match.params.id)
    }
    handleClickBack = (event) => {
        event.preventDefault();
        this.props.LoadingAction();
        this.props.history.goBack();
    }
    render() {
        /*skeleton loader for items*/
        const DetailLoader = () => (
            <ContentLoader
                height={300}
                speed={4}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="140" y="40" rx="0" ry="0" width="60" height="2" />
                <rect x="205" y="40" rx="0" ry="0" width="60" height="2" />
                <rect x="150" y="45" rx="0" ry="0" width="100" height="4" />
                <rect x="0" y="70" rx="0" ry="0" width="400" height="200" />
            </ContentLoader>
        )
        let detailData=this.props.PostsProps.singlePost[0]
        return (
            <Fragment>
                <header>
                    <a href="#" onClick={this.handleClickBack}><FontAwesomeIcon icon={faArrowLeft} /></a>
                    <a href="https://www.linkedin.com/in/humming-bird-4a7b14182/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </header>
                {detailData && detailData!==undefined &&
                <div className="detailWrapper">
                    <div className="full-post-header">
                        <div >
                            <span>{detailData.primary_tag.name} | {moment(detailData.updated_at).format('LL')}</span>
                        </div>
                        <h1>{detailData.title}</h1>
                    </div>
                    <div className="post-full-image">
                        <img src={detailData.feature_image} alt={detailData.title}/>
                    </div>
                    <div className="post-full-content">
                        { ReactHtmlParser(detailData.html) }
                    </div>


                </div>
                }
                {
                    !detailData && detailData===undefined &&  <div><DetailLoader/></div>
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
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id)) ,
    LoadingAction: () => dispatch(LoadingAction()) ,
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail);


