import { default as React } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import EmonHossain from '../assets/EmonHossain.jpg';
import DynamicBanner from "../components/Shared/DynamicBanner";
const About = () => {
  return (
    <div>
      <DynamicBanner title="About Me" />
      <div>
        <div className="container">
          <div className="flex items-center details py-16">
            <div className="md:basis-2/5 w-full image-box">
              <img src={EmonHossain} alt="Emon Hossain" className="rounded-md" />
            </div>

            <div className="md:basis-3/5 w-full ml-[60px] content-box">
              <div className="flex title-icon-box justify-between">
                <div>
                  <h1 className="text-[40px] leading-[48px]">Emon Hossain</h1>
                  <p className="text-[#010c3a]">Front-End Developer</p>
                  <p className="text-[#010c3a flex items-center text-[14px] mb-2">
                    <span className="mr-2">Portfolio : </span><a
                      href="https://emon-36659.web.app/"
                      target="_blank"
                      className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <AiOutlineLink />
                    </a>
                    <span className="mr-2">Resume : </span><a
                      href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                      target="_blank"
                      className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <AiOutlineLink />
                    </a>
                  </p>
                </div>
                <div className="my-4">
                  <div className="flex items-center">
                    <h3 className="mr-3">Follow: </h3>
                    <a
                      href="https://www.facebook.com/emon.webdev/"
                      target="_blank"
                      className="mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsFacebook />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emon-webdev/"
                      target="_blank"
                      className="w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://github.com/emon-webdev"
                      target="_blank"
                      className="ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center"
                    >
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              {/* 
              <div className="py-[15px]">
                <p>
                  <strong>Project Docs </strong>
                </p>
                <ul>
                  <li>1. </li>
                  <li>2. </li>
                  <li>3. </li>
                  <li>4. </li>
                </ul>
              </div> */}

              <div className="pb-[20px] pt-3">
                <p>
                  <strong>Biography</strong>
                </p>
                <p> Hi there, I'm Emon Hossain. I am a professional Mern Stack Developer . I am eager to learn new things and keep myself updated. Hard work never bothers me. "Success often comes to those who embrace hard work" I never give up until I finish my job. So you can work with me with full confidence. <br /> Expert: JavaScript, Es6, React, Firebase Auth, HTML, CSS, Bootstrap, Tailwind, Material Ui. <br />
                  Comfortable: Redux, Firebase, React Router, Node js, MongoDB <br />
                  Familiar: Material UI. TypeScript, Next.js. Mongoose <br />
                  Deploy : Vercel, Netlify, Firebase. <br />
                  Tool: Chrome Dev-tool, VSCode, Github. <br /> Thanks a lot ....❤️ </p>
              </div>
              <hr />

              <div className="flex items-center justify-between py-[10px]">
                <div>
                  <p className="leading-0">Reviews:</p>
                  <div className="flex text-yellow-400">
                    <span>
                      <VscStarFull />
                    </span>
                    <spn>
                      <VscStarFull />
                    </spn>
                    <span>
                      <VscStarFull />
                    </span>
                    <span>
                      <VscStarFull />
                    </span>
                    <span>
                      <VscStarHalf />
                    </span>
                  </div>
                </div>

                <div>
                  <p className="leading-0">Email Address:</p>
                  <span>emon.hossain.web@gmail.com</span>
                </div>

                <div>
                  <p className="leading-0">Phone Number:</p>
                  <span>+880-1919371381</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
