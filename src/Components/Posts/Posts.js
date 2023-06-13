import React, { useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postContext';
import {useHistory} from 'react-router-dom'

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])

  const {setPostDetails}=useContext(PostContext)
  const history=useHistory()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {  //snapshot is just a variable we can use anything
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),   //use a loop and the data store in product and need to return it to allPost  ,  ...is used to spread than we can return id and whatever we want
          id:product.id
        }
      })
      setProducts(allPost)
    })
  }, [])



  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map((product) => {    //used loop 

            return (
              <div
                className="card"
                onClick={()=>{
                  setPostDetails(product)
                  history.push('/view') 
                }} 
                
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />   {/*image stored in storage and we store image url in products so call url to show image*/}
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createAt}</span>
                </div>
              </div>
            )
          })
          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
