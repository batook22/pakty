import React from 'react';
import AppFragmentComponent from '../../_components/_fragments/app-fragment';
import BecomeProComponent from '../../_components/_fragments/become-pro';
import CollectionComponent from '../../_components/_fragments/collection';
import OurBlogComponent from '../../_components/_fragments/our-blog';
import OurShopComponent from '../../_components/_fragments/our-shop';
import SliderComponent from '../../_components/_fragments/slider';
import WhyPaktyComponent from '../../_components/_fragments/why-pakty';
const LandingPage = () => {
    return (
        <div>
            <SliderComponent
                title='Pakty your space in 3D'
                image={require('../../assets/img/slider-1.jpg')}
                content='Visualize 3D furnitures in your project before shopping'
                action='Design my space'
            ></SliderComponent>
            <CollectionComponent color={'blue'}></CollectionComponent>
            <OurShopComponent></OurShopComponent>
            <WhyPaktyComponent></WhyPaktyComponent>
            <AppFragmentComponent></AppFragmentComponent>
            <OurBlogComponent></OurBlogComponent>
            <BecomeProComponent></BecomeProComponent>
        </div>
    );
};

export default LandingPage;