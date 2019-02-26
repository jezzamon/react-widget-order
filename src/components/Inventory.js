import React from 'react';
import PropTypes from 'prop-types';
import EditWidgetForm from './EditWidgetForm';
import AddWidgetForm from './AddWidgetForm';


class Inventory extends React.Component {
  static propTypes = {
    widgets: PropTypes.object,
    addWidget: PropTypes.func,
    updateWidget:PropTypes.func,
    deleteWidget:PropTypes.func,
    loadSampleData: PropTypes.func
  }

  componentDidMount() {}

  render() {

    return (
      <div className="inventory">
        <h2>Inventory!</h2>
        {Object.keys(this.props.widgets).map(key => (
        <EditWidgetForm 
          key={key}
          index={key}
          widget={this.props.widgets[key]}
          updateWidget={this.props.updateWidget}
          deleteWidget={this.props.deleteWidget}
        />
        ))}
        <AddWidgetForm addWidget={this.props.addWidget}/>
        <button onClick={this.props.loadSampleData}>Load Sample Widget</button>
      </div>
      
    )
  }
}

export default Inventory;

