import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="py-20 md:py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="sm:m-auto m-5 md:w-10/12 lg:w-8/12 xl:w-6/12">
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
          <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
            <ul className="list-inside list-disc space-y-8">
              <li>
                <Link href="/" passHref>
                  <a className="transition hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/temple-history" passHref>
                  <a className="transition hover:text-primary">Temple-History</a>
                </Link>
              </li>
              <li>
                <Link href="/idol-details" passHref>
                  <a className="transition hover:text-primary">idol-details</a>
                </Link>
              </li>
              <li>
                <Link href="/dashavatara" passHref>
                  <a className="transition hover:text-primary">Dashavatara</a>
                </Link>
              </li>
              <li>
                <Link href="#seva" passHref>
                  <a className="transition hover:text-primary">Seva</a>
                </Link>
              </li>
            </ul>
            <ul className="list-inside list-disc space-y-8">
              <li>
                <a href="https://alumni.sitmng.ac.in" className="transition hover:text-primary">Alumni</a>
              </li>
              <li>
                <a href="https://www.sitmng.ac.in" className="transition hover:text-primary">SIT</a>
              </li>
              </ul>

<ul role="list" className="space-y-8">
  <li>
    <a href="https://www.instagram.com/sitmng/" className="flex items-center space-x-3 transition hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 2.163c3.179 0 3.48.012 4.711.068 1.143.057 2.141.247 2.905 1.011.764.764.954 1.762 1.011 2.905.056 1.231.068 1.532.068 4.711 0 3.179-.012 3.48-.068 4.711-.057 1.143-.247 2.141-1.011 2.905-.764.764-1.762.954-2.905 1.011-1.231.056-1.532.068-4.711.068-3.179 0-3.48-.012-4.711-.068-1.143-.057-2.141-.247-2.905-1.011-.764-.764-.954-1.762-1.011-2.905-.056-1.231-.068-1.532-.068-4.711 0-3.179.012-3.48.068-4.711.057-1.143.247-2.141 1.011-2.905.764-.764 1.762-.954 2.905-1.011 1.231-.056 1.532-.068 4.711-.068zm0 2.869c-2.551 0-4.632 2.081-4.632 4.632 0 2.551 2.081 4.632 4.632 4.632 2.551 0 4.632-2.081 4.632-4.632 0-2.551-2.081-4.632-4.632-4.632zm0 7.3c-1.459 0-2.632-1.173-2.632-2.632 0-1.459 1.173-2.632 2.632-2.632 1.459 0 2.632 1.173 2.632 2.632 0 1.459-1.173 2.632-2.632 2.632zm6.319-7.295c-.303 0-.545-.242-.545-.545 0-.302.242-.545.545-.545.303 0 .545.242.545.545 0 .302-.242.545-.545.545z" />
      </svg>
      <span>Instagram</span>
    </a>
  </li>
  <li>
    <a href="https://x.com/sitmangalore" className="flex items-center space-x-3 transition hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
      </svg>
      <span>Twitter</span>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/SrinivasInstituteOfTechnology/" className="flex items-center space-x-3 transition hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.172-.007c.055-.003.073-.004.142-.006h.251c.238 0 .503-.002.81-.004zM9 6h-2V5H8v1h1V5h1V4h-2v3h1V6z"/>
      </svg>
      <span>Facebook</span>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/@sitmangalore" className="flex items-center space-x-3 transition hover:text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.172-.007c.055-.003.073-.004.142-.006h.251c.238 0 .503-.002.81-.004zM9 6h-2V5H8v1h1V5h1V4h-2v3h1V6z"/>
      </svg>
      <span>YouTube</span>
    </a>
  </li>
</ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Srinivas Institute of Technology. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
