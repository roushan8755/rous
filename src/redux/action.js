import * as types from './types';
export function updateFriendList(data){
    return{
        type: types.FRIENDLIST,
        data
    }   
}   