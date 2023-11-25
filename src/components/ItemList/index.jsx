import React from 'react'
import './styles.css';

const ItemList = ({title, description, url}) => {
  return (
    <div className="item-list">
        <a href={url}><strong>{title}</strong></a>
        <p>{description}</p>
        <hr />
    </div>
  )
};

export default ItemList;
