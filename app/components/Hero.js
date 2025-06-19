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
        <h2>Hello, I'm Ana 👋</h2>
        <p className="mt-3 text-xl">
          Front-end developer focused on bringing great designs to life with
          clean, responsive & accessible code{" "}
          <span className="text-2xl">👩‍💻</span>
        </p>
      </div>
    </section>
  );
}
