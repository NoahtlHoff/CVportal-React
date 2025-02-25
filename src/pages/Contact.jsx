import React from 'react';

export default function Contact() {
  return (
    <main className="contact">
      <h1>Contact Me</h1>
      <p>
        If you have any questions, suggestions, or just want to say hello, please fill out the form below and I'll get back to you as soon as possible.
      </p>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">(Not implemented)</button>
      </form>
    </main>
  );
}
