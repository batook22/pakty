import React from 'react';
import CollectionComponent from '../../_components/_fragments/collection';
import SliderComponent from '../../_components/_fragments/slider';
const Inspiration = () => {
    return (
        <div>
            <SliderComponent
             image={require('../../assets/img/slider-2.jpg')}
             title=''
             content=''
             textColor='blue'
             ></SliderComponent>
            <CollectionComponent color={'blue'}></CollectionComponent>
        </div>
    );
};

export default Inspiration;