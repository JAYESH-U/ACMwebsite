import React, { useRef, useState } from 'react';
import './emailForm.scss';
import conf from '../../conf/conf';
import emailjs from '@emailjs/browser';
import axios from 'axios';

function EmailForm() {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const sendEmail = (e) => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!inputs.name || !inputs.email || !inputs.message) {
            setErr('Please fill in all the required fields.');
            return;
        }

        setLoading(true);

        var data = {
            service_id: conf.emailjsServiceId,
            template_id: conf.emailjsTemplateId,
            user_id: conf.emailjsPublicKey,
            template_params: {
                from_name: inputs.name,
                from_email: inputs.email,
                to_name: 'ACM manager',
                message: inputs.message,
                reply_to: inputs.email,
            }
        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log("Email sent Successfully! > ", res.data);
            console.log("Email sent Successfully!");
            setInputs({
                name: '',
                email: '',
                message: '',
            });
            setLoading(false);
            setErr(false)
        } catch (error) {
            console.log(error.text);
            setLoading(false);
            setErr(error);
        };
    };

    console.log(inputs);

    return (
        <form onSubmit={handleSubmit} className='emailForm'>
            <h1>Contact Us</h1>
            <input type="text"
                name="name"
                placeholder='Your name'
                value={inputs.name}
                onChange={handleChange}
                required
            />
            <input type="email"
                name="email"
                placeholder='Your Email'
                value={inputs.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder='Message'
                value={inputs.message}
                onChange={handleChange}
                required
            />
            <button type='submit'>Send Mail</button>
            {loading ? <span>Submitting...</span> : null}
            {err ? <span>Error submitting the form...</span> : null}
        </form>
    );
}

export default EmailForm