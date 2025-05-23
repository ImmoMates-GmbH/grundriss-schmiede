import Image from "next/image";
import exampleImg from "../../../../../public/images/public/floor-plans/floor-plan-example.png";

const Intro = () => {
  return (
    <div className="to-primary bg-gradient-to-t from-white">
      <div className="m-auto max-w-screen-xl px-4 py-10">
        <div className="flex flex-col gap-10">
          <div className="text-text-secondary flex flex-col justify-center gap-2 text-5xl leading-none font-bold uppercase sm:text-6xl lg:text-7xl">
            <h1>Grundriss</h1>
            <h1>Zeichnen</h1>
            <h1 className="font-medium">Lassen</h1>
          </div>
          <Image src={exampleImg} alt={"example image of floor plans"} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
