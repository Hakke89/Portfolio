import "../styles/Contact.css";
import { useState } from "react";

function Contact(): JSX.Element {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeTextArea = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            message: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // TODO validation

        event.preventDefault();
        console.log(form);
        alert(
            `Test fase: Message not really sent to anywhere. 
            Form data: ${form.name}, ${form.email}, ${form.message}`
        );
        setForm({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <section className="contact-container" id="contact">
            <h1>Contact</h1>
            <p>Contact content goes here</p>
            <form className="contact-form" onSubmit={handleSubmit}>
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
                        {/* <div className="form-error">
                            Please enter your name.
                        </div>
                        <div className="form-error">
                            Please enter a valid email address.
                        </div>
                        <div className="form-error">
                            Please enter a message.
                        </div> */}
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
}

export default Contact;
