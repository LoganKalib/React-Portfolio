import { tailFooterXl, tailHeadings } from "./Footer-styles";

export default function Footer() {
  return (
    <footer className={tailFooterXl}>
      <div>
        <h5 className={tailHeadings}>E-mail</h5>
        <p>
          logancoghill18@gmail.com
        </p>
      </div>
      <div>
        <h5 className={tailHeadings}>GitHub</h5>
        <p>
          <a href="">LoganKalib</a>
        </p>
      </div>
      <div>
        <h5 className={tailHeadings}>Linkedin</h5>
        <p>
          <a href="">Logan kalib</a>
        </p>
      </div>
      <div>
        <p className="pt-3 text-stone-800">@2023 | Logan Kalib Coghilll.</p>
      </div>
    </footer>
  );
}
