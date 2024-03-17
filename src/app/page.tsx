import Image from "next/image";

export default function Home() {
  return (
    <main className="scrollbar-thin  overflow-y-auto px-20">
      <section
        id="/"
        className="flex h-screen flex-col items-center gap-y-10 pt-10 lg:flex-row-reverse lg:justify-center"
      >
        <Image
          src="/profile.jpg"
          width={800}
          height={800}
          alt="profile pic"
          className="h-60 w-60 rounded-full lg:h-96 lg:w-96"
        />
        <div className="flex max-w-max flex-col justify-center gap-y-5">
          <h1 className="text-4xl text-slate-900 lg:text-6xl">
            Hi, I am Srijan
          </h1>
          <h2 className="text-4xl text-slate-900 lg:text-6xl">
            Software Developer
          </h2>
          <p className="text-slate- s w-3/4 text-wrap text-sm">
            {`With 2 years of experience, I specialize in ReactJS, MongoDB,
            Express, and NextJS, crafting robust web apps and APIs. Let's build
            impactful digital experiences together.`}
          </p>
        </div>
      </section>
    </main>
  );
}
