import React from 'react'
import '../css/home.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { ArcticonsMetrictime, ArcticonsMymoneyPro, EmojioneDeliveryTruck } from './icons/Icons';

const Home = () => {
    return (
        <div>
            <section className="hero">
                <video className="full-width" autoPlay loop muted>
                    <source src="/assets/video/8064118-hd_1920_1080_24fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Fresh Milk and Dairy Products Delivered to Your Doorstep</h1>
                    <p>Experience the freshness of farm-to-table dairy products.</p>
                    <a href="#products" className="cta">Shop Now</a>
                </div>
            </section>
            <section className='why-choose-us'>
                <Container>
                    <h2>Why choose us?</h2>

                    <div className='box'>
                        <Row>
                            <Col xl={4} className='info' sm={4} align="center">
                                <div >
                                    <EmojioneDeliveryTruck icon="emojione:delivery-truck" style={{ color: "black" }} />
                                    <h4>Delivered at your door step</h4></div>
                            </Col>
                            <Col xl={4} className='info' sm={4} align="center">
                                <div >
                                    <ArcticonsMetrictime icon="emojione:delivery-truck" style={{ color: "black" }} />
                                    <h4>Always fresh Ontime</h4></div>
                            </Col>
                            <Col xl={4} className='info' sm={4} align="center">
                                <div >
                                    <ArcticonsMymoneyPro icon="emojione:delivery-truck" style={{ color: "black" }} />
                                    <h4>One month delivery free</h4></div>
                            </Col>
                        </Row></div>
                </Container>
            </section>
            <section className='slider'>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col className='slide' xl={6}>
                                    <img className='slide-img' src="/assets/images/15.webp" alt='milk' />
                                </Col>
                                <Col className='slide' xl={6} valign="center">
                                    <div><h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col className='slide' xl={6}>
                                    <img className='slide-img' src="/assets/images/40268635_1-warana-curddahi-creamy-rich-in-protein.webp" alt='milk' />
                                </Col>
                                <Col className='slide' xl={6} valign="center">
                                    <div><h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col className='slide' xl={6}>
                                    <img className='slide-img' src="/assets/images/warana-kesar-elaichi-shrikhand-500-gm-1000x1000.png" alt='milk' />
                                </Col>
                                <Col className='slide' xl={6} valign="center">
                                    <div><h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
        </div>
    )
}

export default Home
