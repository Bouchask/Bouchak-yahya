
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <Icon className="text-purple-700" size={24} />
    <span className="text-gray-600">{label}</span>
  </a>
);

const Contact = () => {
  const contactLinks = [
    {
      href: "https://github.com/Bouchask",
      icon: Github,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/yahyabouchak",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:mr.bouchakyahya@gmail.com",
      icon: Mail,
      label: "mr.bouchakyahya@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactLinks.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
