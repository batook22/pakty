import { Button, Col, Row } from 'antd';
import React from 'react';
import './style.css'
const SliderContentComponent = (props) => {
    const { title, content, color, action } = props
    return (
        <div className='slider-content'>
            <Row>
                <Col xs={24} lg={12} >
                    <div className={`slider-title text-${color}`}>
                        {title}
                    </div>
                    <div className={`slider-text`}>
                        <p>{content}</p>
                    </div>
                    {action ? <div className='slider-action'>
                        <Button className='pakty-btn-primary'>{action}</Button>
                    </div> : null}
                </Col>
            </Row>

        </div>
    );
};

export default SliderContentComponent;