export default function AboutSections({ heading, children, img }) {
  return (
    <section className=" rounded-xl p-10 flex flex-col w-[40rem] md:flex-row bg-gray-900 justify-evenly m-4">
      <div>
        <h3 className="py-4 text-lg">
          <strong>{heading}</strong>
        </h3>
        {children}
      </div>
      <img src={img} alt="" className="w-40 h-40 text-center rounded-2xl mt-10 ml-8"/>
    </section>
  );
}
