import axios from "axios";
export const FETCH_POST_ITEMS = 'FETCH_POST_ITEMS';
export const GET_PAGE = 'GET_PAGE';
export const LOADING = 'LOADING';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SINGLE_POST = 'SINGLE_POST';

/*get data from api*/
const fetchDataAction = (data) =>{
   return{
       type: FETCH_POST_ITEMS,
       data
   }
}
/*change page number bye number*/
export const PageAction = (page) =>{
    return{
        type: GET_PAGE,
        page
    }
}
/*change loading status to show skeleton loader*/
export const LoadingAction = () =>{
    return{
        type: LOADING,
    }
}
/*go to next page with next button pagination*/
export const NextPageAction = () =>{
    return{
        type: NEXT_PAGE,
    }
}
/*go to prev page with prev button pagination*/
export const PrevPageAction = () =>{
    return{
        type: PREV_PAGE,
    }
}
/*get single post*/
export const SinglePostAction = (data) =>{
    return{
        type: SINGLE_POST,
        data
    }
}


export const fetchPost = (page) => {
    const url =`https://demo.ghost.io/ghost/api/v2/content/posts/?key=22444f78447824223cefc48062&include=tags,authors&page=${page}&limit=${7}`;
    return (dispatch) =>{
        axios.get(url)
            .then(function (response) {
                dispatch(fetchDataAction(response.data));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}

export const fetchSinglePost = (id) => {
    const url =`https://demo.ghost.io/ghost/api/v2/content/posts/${id}/?key=22444f78447824223cefc48062&include=tags,authors`;
    return (dispatch) =>{
        axios.get(url)
            .then(function (response) {
                dispatch(SinglePostAction(response.data.posts));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}