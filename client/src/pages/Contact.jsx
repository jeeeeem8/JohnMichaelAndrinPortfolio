import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// TODO: Replace these with your actual EmailJS IDs from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "service_2wgre4x";
const EMAILJS_TEMPLATE_ID = "template_aqfi5rl";
const EMAILJS_PUBLIC_KEY = "3E8ckmV7fQNO7kEiN";

emailjs.init(EMAILJS_PUBLIC_KEY);

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          message: form.message,
          time: new Date().toLocaleString(),
        }
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully!",
        timer: 2000,
        showConfirmButton: false
      });

      setForm({
        name: "",
        message: ""
      });

    } catch (err) {
      console.error("EmailJS Error:", err);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: err?.text || "Failed to send message. Please try again later."
      });

    } finally {
      setLoading(false);
    }
  };

 
 

  return (
    <section className="pt-28 pb-16 px-6 md:px-12 lg:px-24">

      <AnimatedSection>
        <h2 className="text-5xl font-bold text-center mb-4">
          Let’s Work Together
        </h2>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
          Send me a message. I usually respond within 24 hours.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT FORM */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-primary/10">

            <h3 className="text-2xl font-semibold mb-8 dark:text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">

              {["name", "message"].map(field => (

                <div key={field} className="relative">

                  {field !== "message" ? (
                    <input
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      className="
                        w-full
                        pt-10 pb-2
                        border-b-2
                        bg-transparent
                        outline-none
                        dark:text-white
                        focus:border-primary
                        transition
                      "
                    />
                  ) : (
                    <textarea
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="
                        w-full
                        pt-10 pb-2
                        border-b-2
                        bg-transparent
                        outline-none
                        dark:text-white
                        resize-none
                        focus:border-primary
                        transition
                      "
                    />
                  )}

                  <label className="
                    absolute left-0 top-0
                    text-gray-500 dark:text-gray-400
                    pointer-events-none
                    transition-all duration-300
                    transform translate-y-4
                    peer-focus:-translate-y-2
                    peer-focus:text-sm
                  ">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>

                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-primary text-white font-semibold shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </form>

          </div>

          {/* RIGHT SOCIAL SECTION */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold dark:text-white">
              Connect With Me
            </h3>

            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              You can also reach me through my social platforms.
              I usually respond within 24 hours.
            </p>

            <div className="space-y-4">

              <div className="text-xl w-full p-4 border border-primary rounded-xl text-primary text-center">
                📞 (+63) 960-219-0334
              </div>

              <a
                href="https://www.facebook.com/john.michael.andrin"
                target="_blank"
                className="block w-full p-4 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white transition text-center"
              >
                Facebook
              </a>

              <a
                href="https://www.linkedin.com/in/john-michael-andrin-1b8555382/"
                target="_blank"
                className="block w-full p-4 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white transition text-center"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/jeeeeem8"
                target="_blank"
                className="block w-full p-4 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white transition text-center"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>
      </AnimatedSection>

    </section>
  );
}