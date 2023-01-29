import { Button, Col, Image, Row } from 'antd';
import React from 'react';
import './style.css'


const CardComponent = (props) => {
    const { children, color, title, subtitle, action, image } = props
    const colorChoice = color === 'green' ? { backgroundColor: '#E7FFF9' } : color === 'blue' ? { backgroundColor: '#F1F9FF' } : { backgroundColor: '#fff' }
    const cardDisplay = image ? 'card-part py-0 align-center' : 'card-part text-center'
    return (
        <div className='card'
            style={colorChoice}>
            <Row>
                <Col xs={24} lg={image ? 12 : 0}>
                    <Image preview={false} src={image} />
                </Col>
                <Col xs={24} lg={image ? 12 : 24}>
                    <div className={cardDisplay}>
                        <div className={'card-title'}>{title}</div>
                        <div className={'card-sub'}>{subtitle}</div>
                        {image ?
                            <Row>
                                <Col xs={24} sm={12}>
                                    <Button size='large' block className='pakty-btn-primary'>{action}</Button>
                                </Col>
                                <Col xs={0} sm={12}></Col>
                            </Row> : null}
                    </div>
                </Col>
            </Row>

            {children}
            {!image ? <div className='card-part'>
                <Row>
                    <Col xs={0} sm={4} md={6} lg={9}></Col>
                    <Col xs={24} sm={16} md={12} lg={6}>
                        <Button size='large' block className='pakty-btn-primary'>{action}</Button>
                    </Col>
                    <Col xs={0} sm={4} md={6} lg={9}></Col>
                </Row>
            </div> : null}
        </div>
    );
};

export default CardComponent;