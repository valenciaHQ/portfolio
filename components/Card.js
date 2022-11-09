import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";

function Card({ name, title, social: { github, linkedln, twitter, email } }) {
  return (
    <article className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5 dark:bg-slate-600">
        <Image
          className="w-32 mx-auto shadow-xl rounded-full"
          src={"/image/profile.png"}
          alt="Profile face"
          width={500}
          height={500}
        />
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-white">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2 dark:text-white">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4 ">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
              href={linkedln}
            >
              <FaLinkedinIn />
              <span className="sr-only">Linkedln</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
