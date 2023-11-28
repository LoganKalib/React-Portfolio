import CallingCard from "./CallingCard";
import AboutSections from "./AboutSections";
import ProgressBar from "./ProgressBar";

import placeHolder from "../assets/placeholder.jpg";
import college from "../assets/College.jpg";
import university from "../assets/university.jpg";
import html from "../assets/html5.png";
import tailwind from "../assets/tailwind.jpg";
import reactimg from "../assets/React.png";
import java from "../assets/java.jpg";

export default function HomePage() {
  return (
    <main>
      <CallingCard name="Logan Kalib Coghill!" img={placeHolder}>
        <p className="px-10 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex flex-row mt-10 mx-16">
          <p className="pt-2 mx-6">Development stack |</p>
          <div className="flex flex-row gap-4">
            <img src={html} alt="" className=" w-10 h-10" />
            <img src={tailwind} alt="" className=" w-9 h-9 rounded-full" />
            <img src={reactimg} alt="" className=" w-9 h-9 rounded-full" />
            <img src={java} alt="" className=" w-9 h-9 rounded-full" />
          </div>
        </div>
      </CallingCard>

      <div className="mt-8">
        <h3 className="text-center text-2xl pt-4">
          <strong>Education</strong>
        </h3>
        <div className="flex flex-col justify-evenly mt-4 drop-shadow-lg md:flex-row">
          <AboutSections heading="College of Cape Town" img={college}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum curabitur vitae nunc sed. Et molestie ac feugiat sed
              lectus.
            </p>
          </AboutSections>
          <AboutSections heading="CPUT" img={university}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum curabitur vitae nunc sed. Et molestie ac feugiat sed
              lectus.
            </p>
          </AboutSections>
        </div>
      </div>

      <div className="flex flex-col justify-center p-10 m-10 rounded">
        <h3 className="text-center text-2xl">
          <strong>Knowledge</strong>
        </h3>
        <ProgressBar name="HTML">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[50%]"></div>
        </ProgressBar>
        <ProgressBar name="TAILWIND">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[30%]"></div>
        </ProgressBar>
        <ProgressBar name="REACT">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[35%]"></div>
        </ProgressBar>
        <ProgressBar name="JAVA">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[45%]"></div>
        </ProgressBar>
      </div>
    </main>
  );
}
