import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className={`faq ${isOpen ? 'active' : ''}`} id="faq">
                <div>

                </div>
                <div className="question" onClick={toggleAnswer}>
                    <div>{question}</div>
                    <FaChevronDown className="icon" /> 
                </div>
                {isOpen && <p>{answer}</p>}
            </div>
        </div>

    );
}

export default FAQ;