import "../../App.css";

function Reviews({ text, name, title, image }) {
  return (
    <>
      <blockquote className="bg-primary pt-10 flex flex-col items-center p-4">
        <p className="text-black italic max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
          "{text}"
        </p>

        <footer className="flex items-center gap-3 mt-6 md:mt-12 ">
          <img
            className="w-12 h-12 rounded-full"
            src={image}
            alt="pic"
            loading="lazy"
          />
          <a
            href="/"
            target="_blank"
            className="inline-block font-bold tracking-tight"
          >
            <p className="text-black">{name}</p>
            <p className="font-medium text-black/70">{title}</p>
          </a>
        </footer>
      </blockquote>
    </>
  );
}

export default Reviews;
