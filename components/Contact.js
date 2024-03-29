import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,
                      process.env.NEXT_PUBLIC_TEMPLATE_ID,
                      form.current, 
                      process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then(
                (result) => {
                    alert("Message sent successfully");
                    setFormData({
                        name: "",
                        email: "",
                        message: ""
                    });
                },
                (error) => {
                    alert("Message failed to send. Please try again later.");
                }
            )
    }

    return (
        <section className="row text-light text-center bg-black d-flex justify-content-center mt-4">
            <div className="card col-md-6 mb-3 mt-3 bg-dark border-primary">
                <h2 className="custom-title">
                    Contact Me
                </h2>
                <div className="custom-container-grid mb-3 px-3 py-3">
                    <form onSubmit={handleSubmit} ref={form} className="custom-form">
                        <div className="custom-data">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="custom-input form-control"
                                    required placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="custom-input form-control"
                                    required placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="custom-input form-control custom-textarea"
                                required placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <p>Message</p>
                        <button type="submit" className="btn btn-outline-success custom-btn-message">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;