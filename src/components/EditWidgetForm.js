import React from 'react';
import PropTypes from 'prop-types';

class EditWidgetForm extends React.Component {
  
  static propTypes = {
    widget: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateWidget: PropTypes.func,
    deleteWidget: PropTypes.func
  }

  handleChange = (event) => {
    console.log(event.currentTarget);
    // update that widget
    // 1. Take a copy of the current widget
    const updatedWidget = { 
      ...this.props.widget,
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log(updatedWidget)
    this.props.updateWidget(this.props.index, updatedWidget)
  }
  
  render() {
    
      return (
      <div className="widget-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.widget.name}/>
        <input type="text" name="price"onChange={this.handleChange} value={this.props.widget.price}/>
        <select type="text" name="status" onChange={this.handleChange} value={this.props.widget.status}>
          <option value="available"></option>
          <option value="unavailable"></option>
        </select>
        <textarea type="text" name="desc"onChange={this.handleChange} value={this.props.widget.desc}/>
        <input type="text" name="image"onChange={this.handleChange} value={this.props.widget.image}/>
        <button onClick={() => this.props.deleteWidget(this.props.index)}>Remove Widget</button>
      </div>)


  }
}

export default EditWidgetForm;