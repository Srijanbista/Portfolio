export default function Home() {
  return (
    <main className="relative overflow-y-auto py-10">
      <h1 className="absolute z-10 mb-4 w-full animate-bounce text-nowrap text-center text-sm font-normal text-blue-600 lg:text-xl dark:text-white">
        Portfolio Under Construction...
      </h1>
      <section
        id="/"
        className="ml-auto mr-auto flex h-[calc(100vh-175px)] w-5/6 items-center justify-center rounded-md bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat opacity-50"
      ></section>
    </main>
  );
}
