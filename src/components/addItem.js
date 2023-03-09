import React from 'react'

const AddItem = ({handleChange,handleSubmit}) => {
  return (
    
  <div>
      <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit}>
  <div className="col-12">
    <label className="visually-hidden" for="inlineFormInputGroupUsername">Title</label>
    <div className="input-group">
      <div className="input-group-text">Title</div>
      <input type="text" className="form-control" name='name' onChange={handleChange} id="inlineFormInputGroupUsername"  placeholder="Enter a Title"/>
    </div>
  </div>
  <div className="col-12">
    <label className="visually-hidden" for="inlineFormI">Link</label>
    <div className="input-group">
      <div className="input-group-text">Video Url</div>
      <input type="text" className="form-control" name='link' onChange={handleChange}  id="inlineFormI"  placeholder="Paste video Url"/>
    </div>
  </div>
  <div className="col-12">
    <label className="visually-hidden" for="inlineFormSelectPref">Category</label>
    <select className="form-select" id="inlineFormSelectPref" name='category' onChange={handleChange}>
      <option selected>Choose Category</option>
      <option value="Entertainment">Entertainment</option>
            <option value="Music">Music</option>
            <option value="Education">Education</option>
            <option value="Sport">Sport</option>
    </select>
  </div>

  

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
    
  )
}

export default AddItem
