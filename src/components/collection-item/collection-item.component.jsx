import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price, history, linkUrl, match }) => (
    <div
        className='collection-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)

export default CollectionItem;