import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { LinkPreview } from "@/components/ui/LinkPreview";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="relative flex h-[40rem] w-screen flex-col items-center bg-slate-950 py-10 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-4xl  font-bold text-transparent md:text-7xl">
          Skills
        </h1>
        <div className="mt-40 flex flex-col items-center justify-center  text-black">
          <ul className="z-10 flex flex-wrap items-center justify-around gap-x-5 gap-y-5 lg:gap-x-10">
            <LinkPreview url="https://mongodb.com">
              <li className="rounded-full bg-white p-2">
                <Image
                  src="/mongo.svg"
                  alt="MongoDb Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>
            <LinkPreview url="https://expressjs.com/">
              <li className="rounded-full bg-white p-2">
                <Image
                  src="/express.svg"
                  alt="Express Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>

            <LinkPreview url="https://react.dev/">
              <li className="rounded-full bg-white p-2">
                <Image
                  src="/react.svg"
                  alt="React Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>
            <LinkPreview url="https://nodejs.org/en">
              <li className="rounded-full bg-white p-2">
                <Image
                  src="/nodejs.svg"
                  alt="Nodejs Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>
            <LinkPreview url="https://storybook.js.org/">
              <li className="rounded-full bg-white p-2">
                <Image
                  src="/storybook.svg"
                  alt="Storybook Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>
            <LinkPreview url="https://www.prisma.io/">
              <li className=" rounded-full bg-white p-2">
                <Image
                  src="/prisma.svg"
                  alt="Prisma Logo"
                  height={48}
                  width={48}
                />
              </li>
            </LinkPreview>
          </ul>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Skills;
