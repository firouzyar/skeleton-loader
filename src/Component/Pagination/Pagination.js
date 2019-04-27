import React,{Component} from 'react';
import { connect } from 'react-redux';
/*action*/
import {PageAction,NextPageAction,PrevPageAction} from "../../Action";
/*style*/
import './Pagination.scss'
/*icons*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';


class Pagination extends Component {
    /*got to previous page*/
    prevHandler = () =>{
        this.props.PrevPageAction();
    }
    /*go to next page*/
    nextHandler = () => {
        this.props.NextPageAction();
    }
    /*select current page*/
    changePageHandler = (event) =>{
        const currentPage=Number(event.target.innerText);
        this.props.PageAction(currentPage)

    }
    render() {
        const {next,page,pages,prev} = this.props.pagination;
        let pageNumber=[];
        for(let i=1;i<=pages;i++){
            pageNumber.push(i)
        }

        return (

        <div className="pagination">
            <button className="prev" disabled={!prev} onClick={this.prevHandler}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
            {pageNumber.map((item,key)=>{
                return<button  onClick={this.changePageHandler} className={"pageNumber " + (item===page ? 'active' : '')} key={key}>{item}</button>
            })}
            <button disabled={!next} className="next" onClick={this.nextHandler}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
        </div>
        );
    }
}
/*map dispatch to props */
const mapDispatchToProps = dispatch => ({
    PageAction: (page) => dispatch(PageAction(page)) ,
    NextPageAction: (page) => dispatch(NextPageAction(page)) ,
    PrevPageAction: (page) => dispatch(PrevPageAction(page)) ,
});
export default connect(null,mapDispatchToProps)(Pagination);