import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_vdyylsk";
    const templateId = "template_tfc13el";
    const publicKey = "GJ8xv9Yi_vpg42PHz";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "SAMMIE",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("error sending email:", error);
      });
  };

  return (
    <section className="bg-base-100 ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
          Want to send feedback about our product? Have a new idea on what we
          should do? <br /> Let us know!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Sammie"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              className="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@sammies.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              className="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm "
              placeholder="Let us know how we can help you"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium "
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              rows="6"
              className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border border-gray-300 "
              placeholder="Leave a comment..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-center btn btn-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
