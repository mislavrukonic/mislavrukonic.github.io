import React from 'react';

function Contact() {

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form
                className="contact-form"
                action={formEndpoint}
                method="POST"
            >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="_replyto" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="Message" rows="5" required></textarea>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;