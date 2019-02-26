import React from 'react';
import PropTypes from 'prop-types';

class AddWidgetForm extends React.Component {
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();
  
  static propTypes = {
    addWidget: PropTypes.func
  }
  
  createWidget = (event) => {
    event.preventDefault();
    const widget = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    this.props.addWidget(widget);
    // refresh the form
      //event.currentTarget is the form
      // all forms have a reset() method
    event.currentTarget.reset();
  }
  render() {
    return (
      <form className="widget-edit form-inline" onSubmit={this.createFish}>
        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>
          <input className="form-control" id="name" name="name" ref={this.nameRef} type="text" placeholder="Name"/>
        </div>

        <div className="form-group mb-2">
          <label htmlFor="price">Price</label>
          <input className="form-control" id="price" name="price" ref={this.priceRef} type="text" placeholder="Price"/>
        </div>
        

        
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish </button>
      </form>
      
    )
  }
}

export default AddWidgetForm;