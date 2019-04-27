import {GET_PAGE, FETCH_POST_ITEMS, LOADING, PREV_PAGE, NEXT_PAGE, SINGLE_POST} from "../Action";


const initialState = {
    loading:true,
    Posts: [],
    singlePost:[],
    page:1,
}

const Posts = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_POST_ITEMS:
            return {
                ...state,
                Posts: action.data,
                loading:false
            }
        case GET_PAGE:
            return {
                ...state,
                page:action.page,
                loading:false
            }
        case LOADING:
            return {
                ...state,
                loading:true
            }
        case PREV_PAGE:
            return {
                ...state,
                loading:false,
                page:state.page-1
            }
        case NEXT_PAGE:
            return {
                ...state,
                loading:false,
                page:state.page+1
            }
        case SINGLE_POST:
            return {
                ...state,
                loading:false,
                singlePost:action.data
            }
        default:
            return state;
    }
}

export default Posts;