import { Image } from 'antd';
import React from 'react';
import SliderContentComponent from './slider-content';
import './style.css'
const SliderComponent = (props) => {
    const { image, title, content, color, action } = props
    return (
        <>
            <Image
                width={'100%'}
                preview={false}
                src={image}
            />
            <SliderContentComponent
                title={title}
                content={content}
                color={color}
                action={action}
            />
        </>
    );
};

export default SliderComponent;