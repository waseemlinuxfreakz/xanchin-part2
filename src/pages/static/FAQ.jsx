import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return ( 
        <div className='PageWraper'>  
            <Header/>
            <section className="faq_area affilate_area">
                <div className="container">
                    <div className="faq_container">
                        <h2>FAQ</h2>
                        <div className="accordianList">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                <   Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                <   Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                <   Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                <   Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                <   Accordion.Header><span className='AccorNum'>1.</span> Token are not showing in my wallet account, can you you help me in this matter.</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
     );
}

export default FAQ;