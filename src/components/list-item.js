import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
   
    onDragStart(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    render() {
        return (
            <div className="list-item" id="x" draggable onDragStart={(e) => this.onDragStart(e)}>
            </div>
          );
    }
  }
  
  export default ListItem;