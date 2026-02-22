'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactContent() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please complete all fields before submitting.');
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!isEmailValid) {
      setError('Please enter a valid email address.');
      return;
    }

    setSuccess('Message submitted successfully. Our office will contact you soon.');
    setForm(INITIAL_FORM);
  };

  return (
    <section className="page-wrap section-grid pb-20 lg:grid-cols-2">
      <article className="surface-card p-6">
        <h2 className="text-2xl font-bold">School Office</h2>
        <div className="mt-4 space-y-2 text-sm text-neutral-700">
          <p><span className="font-semibold">Address:</span> 123 Learning Avenue, Greenfield, NY 11201, USA</p>
          <p><span className="font-semibold">Phone:</span> +1 (212) 555-0168</p>
          <p><span className="font-semibold">Email:</span> info@apexiumsschool.edu</p>
          <p><span className="font-semibold">Office Hours:</span> Sunday-Thursday, 8:00 AM-4:00 PM</p>
        </div>

        <div className="surface-soft mt-6 p-4 text-sm text-neutral-700">
          Visit the campus for in-person counseling by booking a slot through admissions.
        </div>
      </article>

      <article className="surface-card p-6">
        <h2 className="text-2xl font-bold">Contact Form</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-neutral-700">Full Name</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Enter full name"
              className="form-control"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-neutral-700">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="Enter email"
              className="form-control"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-neutral-700">Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
              placeholder="Type subject"
              className="form-control"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-neutral-700">Message</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Write your message"
              className="form-control"
            />
          </label>

          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          {success ? <p className="text-sm font-medium text-emerald-600">{success}</p> : null}

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
}
