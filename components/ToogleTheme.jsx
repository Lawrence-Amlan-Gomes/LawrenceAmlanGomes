"use client";
import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";

function ToogleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`rounded-lg border-[1px] lg:h-[40px] lg:w-[40px] sm:w-[35px] sm:h-[35px] h-[30px] w-[30px] relative ${
          theme
            ? "border-[#555555] hover:border-[#000000] hover:bg-[#cccccc]"
            : "border-[#aaaaaa] hover:border-[#bbbbbb] hover:bg-[#111111]"
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          console.log("Toggle clicked, theme:", theme); // Debug log
          setTheme((prev) => !prev);
        }}
      >
        <div className="h-full w-full relative">
          <Image
            priority
            src={theme ? "/Moon.png" : "/Sun.png"}
            alt={theme ? "moon" : "sun"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
            className="object-cover hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default ToogleTheme;