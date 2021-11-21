import React, { memo, useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { updateFriendList } from '../redux/action';
import '../styles/lineInput.scss';
const LineInput = ({type,placeholder,updateFriendList}) =>{
  const [friendList,setFriendList] = useState([]);
  const [val,setVal] = useState('');

  useEffect(() => {
    updateFriendList(friendList);
  },[friendList, updateFriendList]);

  const keyDownHandler  = (e) =>{
     if(val && e.keyCode === 13){
        setFriendList(el => [...new Set([...el , val])]);
        updateFriendList(friendList);
     } 
  }

  const onChangeHandler = (e) =>{
     let value = e.target.value;
     value = value.replace(/[^A-Za-z\s]/ig, '')
     setVal(value); 
  }

  const searchFriend = (e) =>{
    let value = e.target.value.replace(/[^A-Za-z\s]/ig, '');
    //  console.log(friendList.filter(item => {console.log(item.includes(value))})) 
    updateFriendList(friendList.filter(item => item.includes(value)))
  }
   return(
        <input 
            type ={type} 
            value = {val}
            placeholder = {placeholder}
            autoComplete = "new-password"  
            onKeyDown = {(e)=> keyDownHandler(e)}
            onChange = {(e)=> {onChangeHandler(e);searchFriend(e)}} 
        />
   ) 
   
}

const mapStateToProps =  data  => ({
    friendList : data.friendList
})
const mapDispatchToProps = {
    updateFriendList 
}

export default memo(connect(mapStateToProps,mapDispatchToProps)(LineInput));