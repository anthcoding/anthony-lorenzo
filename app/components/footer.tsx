import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Footer = () => {
  const links = [
    { name: 'GITHUB', href: 'https://github.com/anthcoding' },
    { name: 'LINKEDIN', href: 'https://linkedin.com/in/anthlorenzo' },
    { name: 'X', href: 'https://x.com/Anthony99_s' },
  ];

  return (
    <footer className="mb-16">
      <ul className="group font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {links.map((link, index) => (
          <li
            key={index}
            className="relative transition-opacity duration-300 group-hover:opacity-40 hover:!opacity-100"
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-all"
            >
              <span className="text-xs text-neutral-600 mr-1 bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-400 py-1 px-2 rounded-2xl flex items-center gap-1">
                {link.name}
                <IoMdArrowRoundBack className="rotate-135 text-neutral-600 dark:text-neutral-400 transition-transform duration-300" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
