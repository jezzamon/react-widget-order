import React from "react";
// import PropTypes from "prop-types";

import sampleData from "../sample-data"
import Header from "./Header"
import WidgetDetail from "./WidgetDetail"

class App extends React.Component {
  state = {
    infos: {},
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
    this.setState({infos: sampleData})
  }

  addToOrder = key => {}

  removeFromOrder = key => {}

  render() {
    return (
      <div className="">
        <Header headerText="My header Text"/>
        <div className="container">
          {/* widget list */}
        <h4>Widget List</h4>
        <ul className="widget-list-container">
        {Object.keys(this.state.infos).map(key => (
          <WidgetDetail 
            key={key}
            index={key}
            details={this.state.infos[key]}
            addToOrder={this.addToOrder}/>
        ))}
        
        </ul>
        </div>
        

      </div>
    )
  }
};

export default App;