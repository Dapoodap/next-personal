import React from 'react';

function Footer() {
  return (
    <footer className="w-full px-5 py-4 text-center sm:px-0">
      <p className="text-sm">Copyright &copy; {new Date().getFullYear()} Daffa Radhitya&apos;s Personal Website</p>
      <p className="text-sm">Made using Next.js, Tailwind, EmailJs, Frammer Motion</p>
    </footer>
  );
}

export default Footer;
