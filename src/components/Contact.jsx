import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#333] min-h-screen flex items-center justify-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#fe5617] pt-10">
            Contact Us
          </h2>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[100px] justify-center">
          {/* Contact Information */}
          <div className="flex flex-col space-y-6 text-lg md:text-xl font-semibold bg-[#222] p-10 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={24} />
              <span className="text-white">Namakkal</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={24} />
              <span className="text-white">9677459394</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className=" text-[#fe5617]" size={24} />
              <span className="text-white">dhanushkanagaraj007@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold text-[#fe5617]">Follow on</h2>
              <div className="flex gap-4">
              <a
            href="https://github.com/Dhanushk1404"
            className="hover:text-[#fe5617] text-[#FFF]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhanushk1404/"
            className="hover:text-[#fe5617] text-[#FFF]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/lovely__dhanush_14/"
            className="hover:text-[#fe5617] text-[#FFF]"
          >
            <FaInstagram size={29} />
          </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[900px] bg-[#222] text-white p-12 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[#fe5617] text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md p-4 bg-[#111] text-white focus:ring-2 focus:ring-[#fe5617] focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_10px_#fe5617]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md p-4 bg-[#111] text-white focus:ring-2 focus:ring-[#fe5617] focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_10px_#fe5617]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md p-4 h-40 bg-[#111] text-white focus:ring-2 focus:ring-[#fe5617] focus:outline-none transition-all duration-300 hover:shadow-[inset_0_0_10px_#fe5617]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#fe5617] text-white py-4 rounded-md font-semibold hover:bg-[#d44810] disabled:opacity-50 transition-all duration-300 hover:shadow-[inset_0_0_10px_#fe5617] transform hover:scale-105 focus:outline-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center mt-4">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center mt-4">
                Failed to send the message. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
