export default function Header({ setPage }) {
  return (
    <header className="bg-stone-700">
      <menu>
        <ul className="flex flex-row gap-8 justify-end px-10 py-7">
          <li>
            <button onClick={() => setPage("home")} className="hover:underline">
              <strong>Home</strong>
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("about")}
              className="hover:underline"
            >
              <strong>About</strong>
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("contact")}
              className="hover:underline"
            >
              <strong>Contact</strong>
            </button>
          </li>
        </ul>
      </menu>
    </header>
  );
}
