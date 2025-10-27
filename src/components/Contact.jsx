import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

function Contact() {

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT_SHORTHAND;
    const [state, handleSubmit] = useForm(formEndpoint);
    if (state.succeeded) {
        return (
            <div>
                <p>Thank you for your message, I'll get in touch with you soon.</p>
                <br />
                <pre>0% [█ █ █ █ █ █ █ █ █ █] 100%</pre>
            </div>
        );
    }

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="Name" required />
                <ValidationError
                    prefix="Name"
                    field="name"
                    error={state.errors}
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" className="submit-button" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Contact;