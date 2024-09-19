import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              We connect job seekers with opportunities and provide a platform for companies to find their next great hire.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/jobs" className="hover:underline">Job Listings</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              Email: <a href="mailto:support@jobwebsite.com" className="hover:underline">support@jobwebsite.com</a>
            </p>
            <p className="text-sm mt-2">
              Phone: <a href="tel:+123456789" className="hover:underline">+1 234 567 89</a>
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" className="bi bi-facebook">
                  <path d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.293H9.692V11.28h3.127V8.71c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.1 2.795.144v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.762v2.308h3.591l-.468 3.427h-3.123V24h6.128c.73 0 1.325-.593 1.325-1.326V1.326C24 .594 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" className="bi bi-twitter">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.955-2.178-1.555-3.594-1.555-2.72 0-4.92 2.201-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.481 0 1.71.87 3.217 2.19 4.099-.807-.026-1.566-.248-2.228-.617v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.848.171-1.296.171-.314 0-.621-.03-.92-.086.623 1.944 2.432 3.356 4.574 3.394-1.675 1.312-3.782 2.095-6.073 2.095-.394 0-.779-.022-1.16-.067 2.166 1.389 4.735 2.199 7.506 2.199 9.008 0 13.94-7.457 13.94-13.941 0-.212 0-.423-.015-.633.956-.688 1.786-1.547 2.444-2.528l-.047-.02z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" className="bi bi-linkedin">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.028-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.94v5.666H9.346V9.047h3.39v1.551h.048c.474-.9 1.637-1.85 3.371-1.85 3.606 0 4.272 2.373 4.272 5.455v6.25zM5.337 7.433a1.945 1.945 0 01-1.945-1.945c0-1.074.87-1.945 1.945-1.945s1.945.871 1.945 1.945c0 1.074-.87 1.945-1.945 1.945zm1.692 13.019H3.644V9.047h3.385v11.405zm16.07-20.452H1.905A1.905 1.905 0 000 1.905v20.189a1.905 1.905 0 001.905 1.905h21.189A1.905 1.905 0 0025 22.094V1.905A1.905 1.905 0 0022.999 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} JobWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
