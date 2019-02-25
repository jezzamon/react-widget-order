import React from 'react';
import PropTypes from "prop-types";
import { formatPrice } from '../helpers';
class WidgetDetail extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  }
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {

    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button type="button" className="btn btn-primary" disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add to order' : 'Sold out!'}
        </button>
      </li>
      
    )
  }
}

export default WidgetDetail;