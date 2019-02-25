import React from "react";
// import PropTypes from "prop-types";

import sampleData from "../sample-data"
import Header from "./Header"
import WidgetDetail from "./WidgetDetail"
import Order from "./Order"

class App extends React.Component {
  state = {
    widgets: {},
    order: {}
  }

  componentDidMount() {
    this.loadSampleData();
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {

  }

  addWidget = (data) => {}

  updateWidget = (data) => {}

  deleteWidget = (data) => {}

  loadSampleData = () => {
    this.setState({widgets: sampleData})
  }

  addToOrder = key => {
    //1. take a copy of state
    const order = {...this.state.order};
    //2. add new key to order obj, with value of 1 || or update number in order
    order[key] = order[key] + 1 || 1;
    //3. set state
    this.setState({ order: order});
  }

  removeFromOrder = key => {
    //1. take a copy of state
    const order = {...this.state.order};
    //2. remove that item from order
    delete order[key]
    //3. set state
    this.setState({ order: order});
  }

  render() {
    return (
      <div className="">
        <Header headerText="My header Text"/>
        <div className="container">
          {/* widget list */}
        <h4>Widget List</h4>
        <ul className="widget-list-container">
        {Object.keys(this.state.widgets).map( (key) => (
          <WidgetDetail 
            key={key}
            index={key}
            details={this.state.widgets[key]}
            addToOrder={this.addToOrder}/>
        ))}
        
        </ul>
        </div>
        <Order 
          widgets={this.state.widgets}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />

        

      </div>
    )
  }
};

export default App;