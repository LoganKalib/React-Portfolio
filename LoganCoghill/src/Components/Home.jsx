import {
  HomeMainXl,
  HolderXl,
  ContentHolderXl,
  mainImgXl,
  textHolderXl,
  p1Xl,
  p2Xl,
  p3Xl,
  iconXl,
} from "./Home-styles";
import background from "../assets/background.jpg";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import reactimg from "../assets/react.png";
import java from "../assets/java.png";

export default function Home() {
  return (
    <main className={HomeMainXl}>
      <div className={HolderXl}>
        <div className={ContentHolderXl}>
          <img src={background} alt="" className={mainImgXl} />
        </div>
        <div className={textHolderXl}>
          <p className={p1Xl}>Hello,</p>
          <p className={p2Xl}>I'm Logan Coghill</p>
          <p className={p3Xl}>Application development</p>
          <div className="flex flex-row">
            <img src={html} alt="" className={iconXl} />
            <img src={tailwind} alt="" className={iconXl} />
            <img src={reactimg} alt="" className={iconXl} />
            <img src={java} alt="" className={iconXl} />
          </div>
        </div>
      </div>
    </main>
  );
}
