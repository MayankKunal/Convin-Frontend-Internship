import React from "react";
import './Item.css'
// React Component to display individual item
const Item = ({id,name, category,link,clickDelete}) => (

    <div className="card" style={{width: "25rem"}}>
        <div className="card-body">
        <iframe src={link}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
        <h5 className="card-title">{category}</h5>
    <p className="card-text">{name}</p>
   
  
    <button onClick={()=>clickDelete(id)}  className="btn btn-primary">Delete</button>
  </div>

</div>
    
 
);

export default Item;