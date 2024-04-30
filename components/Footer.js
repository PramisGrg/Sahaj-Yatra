import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-primary mx-auto py-16 px-8 grid md:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-white">Sahaj Yatra</h1>
        <p className="py-4 ">Lamachaur-16, Pokhara</p>
        <p className="pb-5">Western Regional Campus(WRC)</p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare size={30} />
          </a>{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={30} />
          </a>
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Members</h6>
          <ul>
            <li className="py-2 text-sm">Aayush</li>
            <li className="py-2 text-sm">Dikshyant</li>
            <li className="py-2 text-sm">Pramis</li>
            <li className="py-2 text-sm">Santosh</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 mr-4">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
