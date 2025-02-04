"use client";
import { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send to API)
      alert("Message sent successfully!");
      toggleModal();
    }
  };

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <section id="contact" className="py-16 bg-default-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 ">Contact Me</h2>
        <p className=" mb-8">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        {/* Contact Details */}
        <div className=" mb-8">
          <p className="mb-2">
            📧{" "}
            <a href="mailto:gandibdhariroy@gmail.com" className="underline">
              gandibdhariroy@gmail.com
            </a>
          </p>
          <p className="mb-2">
            📞{" "}
            <a href="tel:+8801755109039" className="underline">
              +880 1755109039
            </a>
          </p>
          <p>📍 Sunamganj Sadar, Sunamganj, Bangladesh</p>
        </div>

        <button
          onClick={toggleModal}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Get In Touch
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-default-500">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
