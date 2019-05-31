import React from 'react';
import featureData from './feature-data';
import Feature from './Feature';

const FeatureList = () => {

    const featureList = featureData.map((element, i) => 
    <Feature key = {i} feature = {element}/>)

    return (
        <div>
            <div className='first-container'>
                {featureList}
            </div>
        </div>
    )
}

export default FeatureList;