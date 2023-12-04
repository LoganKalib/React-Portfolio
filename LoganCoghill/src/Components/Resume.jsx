import cv from "../assets/logan-coghill-CV.pdf";

export default function Resume() {
  return (
    <main className="mx-20 bg-stone-600">
      <div>
        <iframe src={cv} className="w-[100%] h-screen p-10" />
      </div>
    </main>
  );
}
