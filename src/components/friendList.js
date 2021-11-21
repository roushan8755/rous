import {memo, useEffect} from 'react'
import { connect } from 'react-redux';
import LineInput from '../components/lineInput';
import { updateFriendList } from '../redux/action';
import{Star, Starfill, Delete , SearchIcon} from '../icons/svg';
import '../styles/friendList.scss';
const FriendList = ({friendList,updateFriendList}) =>{
    return(
        <div className ="container">
            <div className ="friend--list--wrapper">
               <div className ="header--txt">Friends List</div>
               <div className ="input--wrapper">
                  <LineInput 
                     type ="text"
                     placeholder ="Enter your friend's name"
                  />
                  <div className ="search--icon"> <SearchIcon /></div>
               </div>
               <div className ="friend--list">
                  {friendList.map(el =>(
                     <Friend 
                       key ={el}
                       name = { el }
                       friendList = {friendList}
                       updateFriendList = {updateFriendList}
                     />
                  ))} 
               </div> 
            </div>
        </div>
    )
}

const Friend = ({name,friendList,updateFriendList}) =>{
    
   const handleStar = () =>{

   }
   const handleDelete = (name) =>{//console.log(name)
     updateFriendList(friendList.filter((el) => el !== name))

   } 
   console.log(friendList)
   return( 
         <div key ={name} className ="friend--wrapper">
            <div className ="left--part">
              <div>{name}</div>
              <div>is your friend </div>
            </div>
            <div className ="right--part">
              <div className ="star" onClick = {handleStar}><Star /></div>
              <div className ="delete" onClick = {() => handleDelete(name)}><Delete /></div>
            </div>
      </div>
   ) 
}

const mapStateToProps = data => ({
	friendList: data.friendList
})

const mapDispatchToProps = {
    updateFriendList 
}

export default memo(connect(mapStateToProps, mapDispatchToProps)(FriendList));