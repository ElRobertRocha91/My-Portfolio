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
            .sendForm("service_zgt1kbl", "template_k1v8um3", form.current, "yF2QjO9nUK9rkeeH0")
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
            <div className="card w-50 mb-3 mt-3 bg-dark border-primary">
                <h2 className="custom-title">
                    Contact Me
                </h2>
                <div className="mb-3 px-3 py-3">
                    <form onSubmit={handleSubmit} ref={form}>
                        <div>
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
                                className="custom-input form-control"
                                required placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <p>Message</p>
                        <button type="submit" className="btn btn-outline-success custom-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;