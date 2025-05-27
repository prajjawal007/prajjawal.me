import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactCard = ({
  icon: Icon,
  title,
  text,
  link,
}: {
  icon: typeof Mail;
  title: string;
  text: string;
  link?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = link ? (
    <a
      href={link}
      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300"
    >
      {text}
    </a>
  ) : (
    <span className="text-slate-600 dark:text-slate-400">{text}</span>
  );

  return (
    <motion.div
      ref={ref}
      className="card flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-1 text-blue-500">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        {content}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      alert("Thank you for your message! I will get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.1), transparent 30%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container-custom">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out. I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <ContactCard
              icon={Mail}
              title="Email"
              text="prayank2742@gmail.com"
              link="mailto:prayank2742@gmail.com"
            />

            <ContactCard
              icon={Phone}
              title="Phone"
              text="+91 7667384063"
              link="tel:+917667384063"
            />

            <ContactCard
              icon={MapPin}
              title="Location"
              text="Jamshedpur, Jharkhand"
            />

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* <h3 className="text-xl font-bold mb-4 pl-5">Download </h3> */}
              <a href="/resume.pdf" download className="btn btn-primary">
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-2 card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="input resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex justify-center"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
