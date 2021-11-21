import * as types from './types';
const initialState = {
   friendList : [], 
} 

const reducer = function(state = initialState, action){
    switch(action.type){
        case types.FRIENDLIST:
            return {
                ...state,
                friendList: action.data
            };
        default :
          return state;     
    }

}
export default reducer;