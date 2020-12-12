import React from 'react'


export const ItemTextDescription = ({itemDetails}) => {
   
    return (
        <div className="itemTextDescription">      
         <div className="titleItemBlock">
         <div className="itemDetailsTitle">
           {itemDetails&&itemDetails.title}
           </div>
           <div className="popularityItem">
               {itemDetails&&itemDetails.popularity}
           </div>
         </div>
           <div className="releaseDateItem">
               {itemDetails&&itemDetails.release_date}
           </div>
           <div className="tagLine">
               {itemDetails&&itemDetails.tagline}
           </div>
           <div className="overview">
               {itemDetails&&itemDetails.overview}
           </div>
           <div className="budget">
               {`Budget ${itemDetails&&itemDetails.budget} $`}
           </div>
        </div>
    )
}


