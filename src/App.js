import React, { useEffect, useMemo, useState } from "react";
import Item from "./components/Item";
import './App.css'
import AddItem from "./components/addItem";
import data from './mock-data.json'
import { nanoid } from "nanoid";
export default function App() {
  const LOCAL_STORAGE_KEY="sportList";
  const [sportList, setSportList] = useState(data);
  
  const [selectedCategory, setSelectedCategory] = useState();
  const [addFormData,setAddFormData]=useState(
    {
      id:'',
      name:'',
    category:'',
    link:""
    }
  );
  // Add default value on page load
  

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const handleChange=(event)=>
  {
   event.preventDefault();
   const fieldName=event.target.getAttribute("name");
   const fieldValue=event.target.value;
   const newFormData={...addFormData};
   newFormData[fieldName]=fieldValue;
   setAddFormData(newFormData);
  }


  const handleSubmit=(e)=>
   {
         e.preventDefault();
         const newdata={
               id:nanoid(),
              name:addFormData.name,
              category:addFormData.category,
              link:addFormData.link,
              
         }
         const newItems=[...sportList,newdata];
         setSportList(newItems);
      
   }
   useEffect(()=>
   {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(sportList));
   }
      ,[sportList] )
      
     const clickDelete=(id)=>
     {
      const newContacts=[...sportList];
      const index=sportList.findIndex((contact)=>contact.id===id);

      newContacts.splice(index,1);
      setSportList(newContacts);
     }

  
  return (

    <div className="app">
    <AddItem handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div className="filter-container">
        <div>Filter by Category:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Music">Music</option>
            <option value="Education">Education</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
      </div>
      <div className="sport-list">
      <div class="card-group" style={{margin:'0,auto'}}>
        {filteredList.map((element, index) => (
          <Item {...element} key={index} clickDelete={clickDelete}  />
        ))}
        </div>
      </div>
      <script src=''/>
    </div>
  );
}