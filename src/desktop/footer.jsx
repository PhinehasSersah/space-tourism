import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <p className="font-barC text-center tracking-[1px] font-medium mt-14 text-white text-xs">
        &copy; PHINEHAS SERSAH, 2022 | Frontend Mentor Challenge
      </p>
      <div className=" flex mx-auto justify-evenly w-20 mt-2">
        <a
          href="https://www.linkedin.com/in/phinehas-sersah-620a8013b"
          className="text-white"
          aria-label="linkedin profile"
          title="Linkedin profile"
        >
          <FiLinkedin size={15}/>
        </a>
        <a
          href="https://twitter.com/PhinehasSersah?t=1JA9AHFlTPhLb06OVIw5wg&s=09"
          className="text-white"
          aria-label="Twitter Profile"
          title="Twitter Profile"
        >
          <FiTwitter size={15} />
        </a>
      </div>
    </>
  );
};

export default Footer;
