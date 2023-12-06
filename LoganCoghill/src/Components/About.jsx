import {
  tailMainXl,
  tailH2Xl,
  tailSectionXl,
  tailHolderXl,
  tailImgContainerXl,
  tailImgXl,
  tailH3Xl,
  tailProgressXl,
  tailProgressContainerXl,
  tailProfileXl,
  tailProfileSec,
  tailProfileImgXl,
} from "./About-styles";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import collegeImg from "../assets/College.jpg";
import universityImg from "../assets/University.jpg";
import profileImg from "../assets/profile.jpg";

function Section({ heading, children, image }) {
  return (
    <section className={tailSectionXl}>
      <div>
        <h3 className={tailH3Xl}>{heading}</h3>
        <br />
        {children}
        <br />
      </div>
      <div className={tailImgContainerXl}>
        <img src={image} alt={heading + " Logo"} className={tailImgXl} />
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className={tailProfileSec}>
      <div className={tailProfileXl}>
        <img
          src={profileImg}
          alt="Logan profile photo"
          className={tailProfileImgXl}
        />
      </div>
      <div className=" ml-10 flex flex-col p-10">
        <h2 className="text-4xl font-bold">Hello,</h2>
        <h2 className="text-8xl font-bold"> World!</h2>
        <p className="w-[30rem] mt-7">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main className={tailMainXl}>
      <h2 className={tailH2Xl}>About Me</h2>
      <br />
      <InfoSection />
      <div>
        <br />
        <div className={tailProgressContainerXl}>
          <div className={tailProgressXl}>
            <p className="text-center">HTML</p>
            <CircularProgressbar value={30} text="30%" />
          </div>
          <div className={tailProgressXl}>
            <p className="text-center">Tailwind</p>
            <CircularProgressbar value={25} text="25%" />
          </div>
          <div className={tailProgressXl}>
            <p className="text-center">React</p>
            <CircularProgressbar value={20} text="20%" />
          </div>
          <div className={tailProgressXl}>
            <p className="text-center">Java</p>
            <CircularProgressbar value={30} text="30%" />
          </div>
        </div>
      </div>
      <div className={tailHolderXl}>
        <Section heading="College of Cape Town" image={collegeImg}>
          <p>Course: Information Technology & Communication</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim diam vulputate ut.
          </p>
        </Section>
        <Section heading="CPUT" image={universityImg}>
          <p>Course: Diploma in Application Development</p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            sit amet justo donec enim diam vulputate ut.
          </p>
        </Section>
      </div>
    </main>
  );
}
