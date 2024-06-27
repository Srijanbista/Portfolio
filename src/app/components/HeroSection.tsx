import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriteEffect";

const HeroSection = () => {
  const words = [
    {
      text: "2+",
    },
    {
      text: "years",
    },
    {
      text: "of",
    },
    {
      text: "experience",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "in",
    },
    {
      text: "software",
    },
    {
      text: "development",
    },
  ];

  return (
    <div className="bg-grid-white/[0.02] relative flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-950 antialiased">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className=" relative z-10 flex max-w-7xl flex-col p-4  pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Srijan Bista
        </h1>
        <TypewriterEffectSmooth words={words} />
      </div>
    </div>
  );
};

export default HeroSection;
