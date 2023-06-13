import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetails, setUserDetails] = useState([])  //here user denotes as seller all sellers are store in db as users
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  
  useEffect(() => {
    const {userId} = postDetails //destructure postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=>{    //used to take that array
        setUserDetails(doc.data())
      })
    })  
  }, [])
  
  console.log(postDetails)

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      
      </div>
    </div>
  );
}
export default View;
