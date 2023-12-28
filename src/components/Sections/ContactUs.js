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
              className="input input-bordered input-md w-full shadow-md"
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
              className="input input-bordered input-md w-full shadow-md "
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
              className="input input-bordered input-md w-full shadow-md "
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
              className="textarea textarea-bordered h-24 w-full text-sm shadow-md  "
              placeholder="Leave a comment..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mx-auto items-center justify-center text-center">
            <button
              type="submit"
              className="py-3 px-5 text-center btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
