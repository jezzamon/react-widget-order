import React from "react";
// import PropTypes from "prop-types";

import sampleData from "../sample-data";
import Header from "./Header";
import WidgetDetail from "./WidgetDetail";
import Order from "./Order";
import Inventory from "./Inventory";

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

  addWidget = (widget) => {
    //to changes state need to use react setState API
    // 1. Take a copy of the existing state
    const widgets = {...this.state.widgets};
    // 2. Add our new fish to that fishes object
    widgets[`fish${Date.now()}`] = widget;
    // 3. Set the new fishes object to state
      // this will overwrite the current state on trigger a rerender of DOM
    this.setState({
      // fishes: fishes
      widgets
    });
  }

  updateWidget = (key, updatedWidget) => {
     // 1 take a copy of the current state
     const widgets = {...this.state.widgets}
     // 2 Update that state
     widgets[key] = updatedWidget;
     // 3 Set that to state
     this.setState({ widgets: widgets });
  }

  deleteWidget = (key) => {
    // 1. Take a copy of state
    const widgets = { ...this.state.widgets };
    // 2. Update the state
    widgets[key] = null; // set to null for it work with firebase (otherwise "delete widgets[key]" is ok)
    delete widgets[key]
    // 3. Update state
    this.setState({ widgets });
  }

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
        <Inventory 
          addWidget={this.addWidget}
          updateWidget={this.updateWidget}
          deleteWidget={this.deleteWidget}
          loadSampleData={this.loadSampleData}
          widgets={this.state.widgets}
        />

        

      </div>
    )
  }
};

export default App;