import Image from "next/image";
import SocialMediaHandle from "./components/SocialMediaHandle";

export default function Home() {
  return (
    <main className="overflow-y-auto px-10 scrollbar-thin lg:px-20">
      <section
        id="/"
        className="flex h-screen flex-col items-center gap-y-10 pt-5 lg:flex-row-reverse lg:justify-center lg:pt-10"
      >
        <Image
          src="/profile.jpg"
          width={800}
          height={800}
          alt="profile pic"
          className="h-60 w-60 rounded-full lg:h-96 lg:w-96"
        />
        <div className="flex max-w-max cursor-default flex-col items-center justify-center gap-y-3 lg:items-start lg:gap-y-6">
          <h1 className="text-center text-4xl text-slate-900 lg:text-left lg:text-6xl">
            Hi, I am Srijan
          </h1>
          <h2 className="text-center text-4xl text-slate-900 lg:text-left lg:text-6xl">
            Software Developer
          </h2>
          <p className="w-11/12 text-wrap text-justify text-sm text-slate-800">
            {`With 2 years of experience, I specialize in ReactJS, MongoDB,
            Express, and NextJS, crafting robust web apps and APIs.`}
          </p>
          <p className="w-11/12 animate-pulse text-wrap text-justify text-lg text-blue-700">
            {` Let's build
            impactful digital experiences together. 🚀`}
          </p>
          <SocialMediaHandle />
        </div>
      </section>
    </main>
  );
}
