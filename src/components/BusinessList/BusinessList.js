import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = ({businesses}) => {

    // const getBusinesses = () => {
    //   if(Object.keys(businesses).length > 0) {
    //     return businesses.map(business => {
    //       console.log(business)
    //       // return business
    //       return <Business business={business} key={business.id}/>;
    //     })
    //   } else {
    //     return null
    //   }
    // }

    // return (
    //   <div>
    //    {getBusinesses}
    //   </div>
    // )


    return (
      <div className="BusinessList">
      {
        businesses.map(business => {
          console.log(business)
          return <Business business={business} key={business.id}/>;
        })
      }</div>
    )
};

export default BusinessList;