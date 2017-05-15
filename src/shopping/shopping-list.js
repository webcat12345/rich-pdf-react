import React, { Component } from 'react';
import './shopping-list.css';

class ShoppingList extends Component {
    render() {
        return (
            <div className="shoppping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList;