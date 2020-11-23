import React from 'react'
import Logo from './logo'

const ItemCover = ({coverImage}) => {
    return (
        <div className="itemWrapper">
           <img className="coverImage" src={coverImage} alt="" />
        </div>
    )
}

export default ItemCover
