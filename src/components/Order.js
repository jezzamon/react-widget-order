import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    widgets: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  }
  
  renderOrder = (key) => {
    const widget = this.props.widgets[key];
    const count = this.props.order[key];
    const isAvailable = widget && widget.status === 'available';
    const transitionOptions = {
      classNames: "order",
      key, 
      timeout: { enter: 500, exit: 500 }
    }

    // Make sure widget is loaded before we continue
    if (!widget) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry { widget ? widget.name : 'widget'} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition 
                classNames="count"
                key={count}
                timeout={{enter: 500, exit: 500}}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {widget.name} 
            {formatPrice(count * widget.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
      
    );
  }
  
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const widget = this.props.widgets[key];
      const count = this.props.order[key];
      const isAvailable = widget && widget.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * widget.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order!</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        <div className="total">
        Total: 
        <strong>{formatPrice(total)}</strong>
        </div>
      </div>
      
    )
  }
}

export default Order;