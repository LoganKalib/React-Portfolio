export default function CallingCard({ name, children, img }) {
  return (
    <section className="flex flex-col mx-20 mt-10 px-16 py-11 rounded-t-xl bg-zinc-700 md:flex-row ">
      <img
        src={img}
        alt={name}
        className="w-80 h-80 p-5 rounded-full drop-shadow-lg"
      />

      <div>
        <h2 className="pb-8 text-4xl md:text-center">
          <strong>{name}</strong>
        </h2>
        {children}
      </div>
    </section>
  );
}
