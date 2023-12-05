import {
  tailHeaderXl,
  tailUlXl,
  tailMenuXl,
  tailH1Xl,
  tailLiXl,
  tailBtnXl,
  tailActiveXl,
} from "./Header-styles";

export default function Header({ tabs, page, onClick }) {
  return (
    <header className={tailHeaderXl}>
      <h1 className={tailH1Xl}>Logan Kalib</h1>
      <menu className={tailMenuXl}>
        <ul className={tailUlXl}>
          {tabs.map((tab) => (
            <li className={tailLiXl} key={tab}>
              <button
                className={`${tailBtnXl} ${page === tab ? tailActiveXl : ""}`}
                onClick={() => onClick(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </menu>
    </header>
  );
}
