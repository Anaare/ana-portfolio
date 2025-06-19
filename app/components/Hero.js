import Image from "next/image";
import me from "../../public/images/Ana.jpg";
export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 m-10">
      <Image
        src={me}
        alt="profile-picture"
        className="w-40 h-40 rounded-full shadow-lg"
      />
      <div className="hero">
        <h2 className="text-4xl font-extrabold text-balance">
          Hi, I&apos;m Ana 👋
        </h2>
        <p className="mt-4 text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-balance">
          A front-end developer with a finance background — I bring great
          designs to life with clean, accessible code.
        </p>
      </div>
    </section>
  );
}
