import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="animate-bounce mb-4 font-light text-sm lg:text-xl text-nowrap text-neutral-950 dark:text-white">
        Portfolio Under Construction...
      </h1>
      <Image
        width={500}
        height={500}
        className="w-52 h-52 lg:w-96 lg:h-96"
        src="/under-construction.png"
        alt="under-construction"
      />
    </main>
  );
}
