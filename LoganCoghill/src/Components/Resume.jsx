import cv from "../assets/logan-coghill-CV.pdf";

export default function Resume() {
  return (
    <div className="mx-20">
      <iframe src={cv} className="w-[100%] h-screen"/>
    </div>
  );
}
