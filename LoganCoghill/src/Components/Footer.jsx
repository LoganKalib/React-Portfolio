import { tailFooterXl, tailHeadings } from "./Footer-styles";

export default function Footer() {
  return (
    <footer className={tailFooterXl}>
      <div>
        <h5 className={tailHeadings}>E-mail</h5>
        <p>LoganKalib@proton.me</p>
      </div>
      <div>
        <h5 className={tailHeadings}>GitHub</h5>
        <p>LoganKalib</p>
      </div>
      <div>
        <h5 className={tailHeadings}>Linkedin</h5>
        <p></p>
      </div>
      <div>
        <p className="pt-3">@2023 | Logan Kalib Coghilll.</p>
      </div>
    </footer>
  );
}
