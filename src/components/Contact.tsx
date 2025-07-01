import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, socialLinks } from '../mockData';

const iconMap = {
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form or show success message
  };

  return (
    <section id="contact" className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <MessageCircle className="text-indigo-600 dark:text-pink-400 drop-shadow animate-bounce" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg transition-transform duration-300 hover:scale-105">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">Let's Connect</h3>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group relative">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${info.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                    <a
                      href={info.href}
                      className="relative group/link flex items-center p-6 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-2xl \
                                 border border-white/50 dark:border-neutral-800 hover:shadow-xl transition-all duration-500 \
                                 hover:transform hover:scale-105"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10 dark:bg-opacity-20 mr-6 flex items-center justify-center`}>
                        {/* Use a solid color for the icon for visibility */}
                        {iconMap[info.icon as keyof typeof iconMap] && React.createElement(iconMap[info.icon as keyof typeof iconMap], {
                          size: 30,
                          className: 'text-indigo-700 dark:text-white drop-shadow-md'
                        })}
                      </div>
                      <div>
                        <h4 className="text-neutral-900 dark:text-white font-bold text-lg mb-1">{info.label}</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 group-hover/link:text-indigo-700 dark:group-hover/link:text-indigo-300 transition-colors duration-200 font-medium mb-1">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto text-neutral-400 dark:text-indigo-300 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-200 group-hover/link:translate-x-1 transition-all duration-300" size={20} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-neutral-900 dark:text-white font-bold text-xl mb-6">Follow My Journey</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`flex flex-col items-center p-6 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl \
                                border border-white/50 dark:border-neutral-800 text-neutral-500 dark:text-neutral-300 transition-all duration-300 \
                                hover:transform hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="text-sm font-medium mt-2">{social.label}</span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{social.followers}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-pink-900/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 dark:border-neutral-800 shadow-xl">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 dark:text-neutral-200 font-medium mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white \
                                 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
                                 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 dark:text-neutral-200 font-medium mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white \
                                 placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
                                 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-neutral-700 dark:text-neutral-200 font-medium mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white \
                               placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
                               transition-all duration-300"
                    placeholder="Let's discuss your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-neutral-700 dark:text-neutral-200 font-medium mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-white \
                               placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
                               transition-all duration-300 resize-none"
                    placeholder="Tell me about your vision, goals, and how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold rounded-xl \
                             hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105
                             flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-600 dark:to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
