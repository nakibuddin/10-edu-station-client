import React from 'react';
import './FAQ.css'
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div className='faq'>
            <h1>Frequently Asked Question</h1>
            <div className='faq_accordion'>            
                <Accordion defaultActiveKey="0" flush>                    

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How can I purchase the courses?</Accordion.Header>
                        <Accordion.Body>
                            If you are interested in purchasing our courses, please send us a Course Quotation Request to let us know which courses you are interested in, the license type (purchase, annual subscription), the number of users and the languages required. We will then promptly provide you with the appropriate pricing information. Companies and Organizations may order courses via purchase order and make payment via bank transfer or PayPal. <br/> <br/>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is my purchased course transferable?</Accordion.Header>
                        <Accordion.Body>
                            No. Your course cannot be transferred to anyone else. <br/> <br/>
                        </Accordion.Body>                    
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How long do I have access to my purchased course?</Accordion.Header>
                        <Accordion.Body>
                        A. You have access to the courses you have purchased indefinitely.  Access to the assessment will be for a 12-month period from the date of purchase. <br/> <br/>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What if I need technical support?</Accordion.Header>
                        <Accordion.Body>
                            If you should require technical support, we would be happy to help you. You can reach us via email, telephone or via the contact form on our website. <br/> <br/>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Do I receive a certificate?</Accordion.Header>
                        <Accordion.Body>
                        Yes. The majority of our eLearning courses have CPD accredited assessments with the ability to print a certificate once the assessment has been passed (80% pass mark). The below courses are CPD accredited but do not include assessments, for these courses a certificate of participation is accessable at the end of the last module. <br/>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;