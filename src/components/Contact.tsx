import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { useState, useEffect, useRef } from "react";

/**
 * Contact component to display contact form and handle form submission
 * using EmailJS service.
 *
 * @returns {JSX.Element} Contact component
 */
const Contact = (): JSX.Element => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (import.meta.env.VITE_PUBLIC_KEY) {
            emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
        } else {
            console.error("EmailJS public key is not defined.");
        }
    }, []);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeTextArea = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            message: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current && form.name && form.email && form.message) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
                    formRef.current,
                    {
                        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    }
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                        alert(
                            "Thank you for your message. I will get back to you soon."
                        );
                    },
                    (error) => {
                        console.error("FAILED", error.text);
                        alert(
                            "Failed to send the message. Please try again later."
                        );
                    }
                );

            // Reset form state after submission
            setForm({
                name: "",
                email: "",
                message: "",
            });
            setErrorMessage("");
        } else {
            // Set error message if form fields are empty
            setErrorMessage("Please enter your name, email and message.");
        }
    };

    return (
        <section className="contact-container" id="contact">
            <h1 className="contact-title">Contact</h1>
            <p>
                Interested in working together? Want to get in touch? Send me a
                message!
            </p>
            <form
                ref={formRef}
                className="contact-form"
                onSubmit={handleSubmit}
            >
                <input
                    className="form-field"
                    name="name"
                    value={form.name}
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="form-field"
                    name="email"
                    value={form.email}
                    onChange={handleChangeInput}
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    className="form-field textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChangeTextArea}
                    placeholder="Message"
                ></textarea>
                <div className="form-button-container">
                    <div className="form-error-container">
                        {errorMessage && (
                            <div className="form-error">{errorMessage}</div>
                        )}
                    </div>
                    <button
                        className="submit-button background-transform"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
