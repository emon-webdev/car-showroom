import React from 'react';

const AdvertisedItems = ({advertise}) => {
    console.log(advertise)
    return (
        <div>
            <h2>Advertised Items {advertise.length}</h2>
        </div>
    );
};

export default AdvertisedItems; 