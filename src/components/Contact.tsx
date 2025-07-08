import React, { useState } from 'react';
import { Send, MessageCircle, ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../mockData';
import { ContactButton } from './ContactButton';
import { motion } from 'framer-motion';

const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
    <path fill="#b3b1b0" d="M117.555 76.558c0-3.957-3.008-7.178-6.72-7.178H57.159c-3.712 0-6.72 3.221-6.72 7.178c0 3.958 3.002 7.18 6.72 7.18h53.676c3.712.005 6.72-3.217 6.72-7.18"/>
    <path fill="#e7a41f" d="m18.79 96.996l23.003 23.26c5.19 5.221 12.363 7.744 20.283 7.744s15.094-2.73 20.294-7.968l13.803-14.065c2.72-2.741 2.624-7.28-.208-10.133c-2.832-2.854-7.333-2.95-10.048-.208L71.645 109.53c-2.465 2.49-5.878 3.53-9.649 3.53s-7.179-1.04-9.653-3.53L29.419 86.26c-2.47-2.49-3.712-6.133-3.712-9.936s1.243-7.238 3.712-9.728l22.854-23.361c2.47-2.49 5.952-3.44 9.718-3.44s7.179 1.04 9.648 3.53l14.273 13.9c2.72 2.746 7.221 2.65 10.053-.203c2.832-2.859 2.928-7.398.208-10.14L82.37 32.825a26.64 26.64 0 0 0-12.758-7.094l-.18-.037l13.05-13.35c2.73-2.741 2.635-7.285-.197-10.139S74.945-.74 72.22 2.002L18.79 55.87c-5.19 5.237-7.905 12.464-7.905 20.454S13.6 91.77 18.79 96.996"/>
    <path fill="#070706" d="M43.5 121.674a11.3 11.3 0 0 1-2.528-1.925c-7.078-7.11-14.187-14.187-21.249-21.318C9.115 87.721 7.445 72.1 15.531 59.39a32 32 0 0 1 4.475-5.355L71.33 2.605c3.333-3.34 7.99-3.478 11.088-.358c2.987 3.003 2.81 7.76-.416 11.019c-4.101 4.139-8.208 8.267-12.315 12.4c-.219.651-.747 1.067-1.2 1.531c-4.603 4.672-9.334 9.222-13.872 13.963c-.592.619-1.398.992-1.984 1.627c-7.59 7.59-15.27 15.094-22.753 22.784c-6.054 6.225-5.85 15.67.363 22.012c6.976 7.125 14.075 14.134 21.126 21.195c.357.357.725.704 1.088 1.056c2.496 1.616 2.528 6.667.976 8.912c-1.712 2.48-3.947 4-7.11 3.883c-1.061-.032-1.936-.458-2.821-.955"/>
  </svg>
);

const CredlyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M23.8 13.154a.3.3 0 0 0-.101-.024a.4.4 0 0 0-.202.048c-.06.028-.092.08-.127.136c-.087.128-.15.268-.226.4c-.107.187-.246.351-.38.515c-.135.156-.286.291-.424.44c-.028.027-.072.043-.107.027c-.028-.016-.036-.056-.032-.088c.04-.38.075-.763.123-1.138c.02-.172.043-.336.063-.512c.028-.247.056-.487.087-.735l.234-1.824c.02-.128.032-.372-.135-.52a.45.45 0 0 0-.233-.116a.46.46 0 0 0-.254.06c-.226.16-.297.504-.365.76c-.142.603-.178 1.241-.471 1.804a2 2 0 0 1-.202.316a.7.7 0 0 1-.186.18a.33.33 0 0 1-.246.051a.37.37 0 0 1-.238-.207a.871.871 0 0 1-.063-.324a4.5 4.5 0 0 1 .24-1.585c.045-.132.089-.252.104-.383c.028-.156.028-.38-.114-.516c-.131-.128-.337-.18-.504-.128c-.194.056-.31.244-.372.392c-.198.463-.25.95-.317 1.446c-.044.327-.127.64-.293.926a2.7 2.7 0 0 1-.603.72c-.118.087-.222.123-.328.107a.38.38 0 0 1-.278-.208a.9.9 0 0 1-.095-.315a3.361 3.36 0 0 1-.036-.616c.004-.223 0-.44.044-.658c.075-.39.678-1.937.808-2.345c.135-.407.262-.823.353-1.246c.08-.38.123-.767.11-1.15c-.007-.277-.07-.576-.288-.736a.611.61 0 0 0-.603-.048a.97.97 0 0 0-.455.428a2.5 2.5 0 0 0-.226.59a12 12 0 0 0-.266 1.29c-.071.429-.138.848-.206 1.268c-.06.355-.206 1.614-.261 1.88c-.06.272-.175.54-.301.787c-.131.268-.258.536-.408.791a.7.7 0 0 1-.175.224c-.08.06-.182.088-.27.048c-.102-.048-.146-.176-.166-.292c-.075-.435-.012-.875.072-1.302c.083-.431.44-2.4.519-2.851c.099-.532.24-1.05.285-1.59c.028-.388.09-.88-.202-1.187c-.115-.136-.31-.16-.44-.136c-.174.036-.31.176-.388.296c-.1.128-.186.28-.258.467c-.115.284-.186.615-.261.91l-.032.129q-.123.574-.186 1.162a16.95 16.948 0 0 0-.06.632q-.011.15-.027.307c0 .08.007.168-.028.244a.3.3 0 0 1-.052.068c-.08.072-.202.06-.31.056c-.557-.016-1.045.3-1.35.755c-.18.252-.281.542-.39.834c-.01.048-.034.1-.054.152c-.051.143-.13.327-.222.511a3 3 0 0 1-.317.46a3.3 3.3 0 0 1-.384.41a1.1 1.1 0 0 1-.515.26c-.174.04-.384-.043-.543-.203a.9.9 0 0 1-.206-.54c-.004-.055-.004-.115.028-.163c.05-.068.146-.072.23-.076a1.62 1.62 0 0 0 1.375-1.015c.138-.34.178-.698.122-1.046a1.2 1.2 0 0 0-.19-.48a.9.9 0 0 0-.396-.323c-.293-.14-.658-.127-1.01.004c-.575.232-.951.74-1.134 1.562l-.02.088c-.114.487-.23 1-.582 1.354c-.127.12-.261.163-.368.143c-.044-.004-.08-.04-.103-.075c-.096-.16.003-.532.15-1a4 4 0 0 0 .1-.366a.93.93 0 0 0-.108-.495a.8.8 0 0 0-.372-.324c-.143-.064-.31-.06-.468-.06h-.047c-.044 0-.103 0-.151-.012a.22.22 0 0 1-.147-.127a.5.5 0 0 1 .016-.232c.004-.02.012-.048.016-.072a.37.37 0 0 0-.162-.412a.51.51 0 0 0-.468-.036a.77.77 0 0 0-.364.348a.77.77 0 0 0-.103.48c.04.13.07.32.043.475c-.055.28-.222.51-.384.74c-.04.05-.072.106-.107.16a5 5 0 0 1-.706.825c-.372.335-.804.575-1.232.67c-.745.165-1.506-.06-1.91-.734c-.222-.38-.32-.827-.348-1.266a5.4 5.4 0 0 1 .424-2.516c.328-.76.816-1.52 1.715-1.614c.353-.04.753.083.912.4c.115.23.075.506 0 .75c-.072.244-.175.49-.18.75c-.003.26.124.54.37.616c.238.072.495-.08.634-.29c.138-.21.186-.46.245-.704a6.282 6.282 0 0 1 .662-1.634c.139-.236.297-.488.254-.76a.54.54 0 0 0-.373-.415a.54.54 0 0 0-.535.144c-.134.148-.206.371-.387.43c-.17.06-.35-.055-.507-.134c-.6-.32-1.336-.312-1.963-.048c-.634.25-1.146.735-1.526 1.294C.462 8.53.098 9.508.022 10.48c-.027.34-.031.695 0 1.038c.036.46.1.854.214 1.206c.139.423.317.79.547 1.094c.266.34.587.6.94.747c.372.148.784.22 1.192.208a3.2 3.2 0 0 0 1.177-.283a4.3 4.3 0 0 0 1.026-.68c.309-.26.594-.559.84-.89q.243-.336.44-.708a5 5 0 0 0 .178-.383c.044-.104.087-.215.202-.26c.056-.043.15-.02.202.013c.064.04.115.075.135.135c.048.116.02.232-.004.332v.012c-.028.1-.055.203-.091.303c-.14.424-.238.811-.16 1.195c.045.207.128.387.25.527a.84.84 0 0 0 .504.264c.246.04.51-.028.725-.132q.217-.103.397-.26c.06-.06.122-.12.174-.184c.044-.06.087-.147.178-.143a.15.15 0 0 1 .107.064c.028.031.04.071.06.115c.23.52.776.84 1.335.84h.07c.27 0 .556-.093.79-.22c.27-.14.48-.348.7-.552c.02-.016.045-.04.073-.044c.035-.008.07.012.099.044a.3.3 0 0 1 .047.1c.135.34.46.6.824.66a1.1 1.1 0 0 0 .99-.356c.056-.06.104-.128.167-.176c.064-.044.15-.076.222-.044c.107.04.135.164.182.268c.107.235.357.371.615.375c.289 0 .554-.148.764-.34c.195-.183.353-.399.516-.61a.3.3 0 0 1 .106-.096c.04-.024.096-.028.13 0c.033.024.045.06.06.091c.163.4.587.652 1.01.648c.417-.004.809-.224 1.103-.516c.095-.092.194-.2.32-.21c.14-.017.207.114.254.22c.072.142.115.238.25.338c.158.116.36.152.547.1c.17-.04.34-.156.47-.316c.072-.088.112-.204.19-.284c.092-.087.132.028.136.1q.022.176.008.352c-.016.236-.052.471-.08.703c-.011.068-.02.136-.063.188c-.06.068-.166.08-.253.064a3 3 0 0 0-.321-.028l-.14-.016c-.201-.012-.4-.036-.61-.044h-.185c-.404 0-.733.048-1.03.16c-.48.187-.852.57-1.003 1.018a1.3 1.3 0 0 0-.052.64c.04.203.13.403.282.587c.265.315.68.515 1.149.543c.408.02.852-.064 1.292-.26c.848-.367 1.482-1.094 1.696-1.95c0-.02.01-.039.023-.043q.448-.157.813-.428c.245-.187.467-.399.65-.643q.135-.18.253-.37c.07-.125.13-.257.202-.38a.9.9 0 0 0 .13-.316a.4.4 0 0 0-.05-.328a.26.26 0 0 0-.135-.124m-13.68-1.63c.017-.071.045-.14.06-.206a1.9 1.9 0 0 1 .262-.504c.04-.048.08-.1.135-.136a.25.25 0 0 1 .186-.048c.107.02.183.128.202.236c.032.18-.04.396-.114.555a1.1 1.1 0 0 1-.31.415c-.06.044-.114.088-.178.116c-.028.008-.063.028-.115.028h-.016c-.055 0-.114-.028-.126-.088a.8.8 0 0 1 .015-.367m4.308-.184c-.004.072-.024.148-.028.223a5 5 0 0 0 0 .779c.012.152.047.3-.016.444a1.07 1.07 0 0 1-.567.643a.6.6 0 0 1-.245.056l-.06-.004c-.12 0-.214-.092-.265-.18a.871.87 0 0 1-.1-.272a2.13 2.13 0 0 1 .072-1.122c.08-.22.202-.435.38-.594a.87.87 0 0 1 .563-.24a.3.3 0 0 1 .206.064c.04.044.06.104.056.164a.05.05 0 0 1 .004.04m6.43 4.653c-.015.044-.06.104-.08.14c-.042.08-.102.163-.161.235a2.6 2.6 0 0 1-.317.304c-.238.18-.503.311-.777.387a2 2 0 0 1-.487.072h-.04a.8.8 0 0 1-.515-.18a.43.43 0 0 1-.158-.25a.54.54 0 0 1 .047-.305a.78.78 0 0 1 .38-.383c.326-.16.682-.176 1.019-.16c.139.004.265.012.4.02c.107.004.218.012.325.024q.086 0 .17.012c.044.004.092-.004.135.008c.06.004.068.036.06.076"/>
  </svg>
);


const GoogleDevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="125" viewBox="0 0 256 125">
    <path fill="#fabc05" d="M184.315 67.704c13.469-7.736 26.902-15.535 40.417-23.19c12.828-7.269 27.92-.566 30.829 13.578c1.683 8.182-1.97 17.021-9.357 21.326c-24.218 14.113-48.471 28.17-72.845 42.012c-7.544 4.284-15.315 3.496-22.19-1.754c-6.984-5.33-9.185-12.682-7.547-21.239c1.87-6.514 6.15-10.869 11.987-14.127c9.65-5.386 19.145-11.056 28.706-16.606"/>
    <path fill="#109d58" d="M194.203 62.079c-13.435-7.796-26.904-15.531-40.292-23.406c-12.709-7.476-14.449-23.898-3.655-33.49c6.244-5.547 15.725-6.804 23.147-2.559c24.332 13.917 48.632 27.893 72.806 42.08c7.482 4.391 10.684 11.516 9.577 20.095c-1.125 8.712-6.39 14.294-14.62 17.155c-6.577 1.638-12.488.108-18.228-3.318c-9.49-5.665-19.148-11.053-28.735-16.557"/>
    <path fill="#e94436" d="M71.752 56.563c-8.621 4.898-17.247 9.787-25.86 14.7c-5.037 2.874-10.02 5.846-15.083 8.672c-10.203 5.695-22.325 2.357-28.11-7.674c-5.521-9.572-2.348-21.982 7.478-27.718C34.202 30.52 58.289 16.599 82.463 2.833c7.414-4.221 15.106-3.69 21.962 1.357c7.236 5.327 9.605 12.823 7.98 21.61c-1.008 2.127-1.61 4.62-3.12 6.295c-2.454 2.725-5.244 5.334-8.35 7.25c-9.612 5.927-19.44 11.505-29.183 17.218"/>
    <path fill="#4385f3" d="M61.867 62.057c8.553 5.016 17.1 10.043 25.661 15.045c5.007 2.926 10.072 5.755 15.051 8.726c10.034 5.99 13.205 18.156 7.41 28.181c-5.53 9.568-17.863 13.026-27.744 7.383c-24.157-13.795-48.256-27.693-72.264-41.746C2.618 75.336-.768 68.409.175 59.948c.995-8.931 6.302-14.73 14.725-17.717c2.345-.189 4.805-.915 7.011-.445c3.587.764 7.242 1.875 10.454 3.607c9.939 5.36 19.683 11.082 29.502 16.664"/>
  </svg>
);

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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
              >
                <ContactButton icon={<Github />} href="https://github.com/RahulPatil-96" label="GitHub" />
                <ContactButton icon={<Linkedin />} href="https://linkedin.com/in/rahul-patil-096k" label="LinkedIn" />
                <ContactButton icon={<Mail />} href="mailto:rahulpatil096k@gmail.com" label="Email" />
                <ContactButton icon={<LeetCodeIcon />} href="https://leetcode.com/u/rahulpatil096k/" label="LeetCode" />
                <ContactButton icon={<CredlyIcon />} href="https://www.credly.com/users/rahul-patil.fa68d5f4" label="Credly" />
                <ContactButton icon={<GoogleDevIcon />} href="https://developers.google.com/profile/u/rahulvijaypatil_jspmrscoe" label="Google for Developers" />
              </motion.div>
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
