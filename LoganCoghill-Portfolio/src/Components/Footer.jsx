import linkedin from "../assets/linkedin.png";
import github from "../assets/github-mark.svg";
export default function Footer() {
  return (
    <footer className="bg-stone-700 mt-10 ">
      <menu className="flex flex-col py-6 justify-evenly text-center">
        <ul className="flex flex-row justify-center gap-7 pt-6">
          <li>
            <button className="hover:underline">Home</button>
          </li>
          <li>
            <button className="hover:underline">About</button>
          </li>
          <li>
            <button className="hover:underline">Contact</button>
          </li>
        </ul>
        <div className="flex flex-row gap-7 pt-10 justify-center">
          <button>
            <img src={linkedin} alt="" className="w-8 h-8 " />
          </button>
          <button>
            <img src={github} alt="" className="w-8 h-8" />
          </button>
        </div>
      </menu>
    </footer>
  );
}
