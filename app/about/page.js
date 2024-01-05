import React from "react";
import ReadMoreBtn from "../components/Buttons/ReadMoreBtn";

import thumbImg from "@/public/images/thumb.png";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">About</h1>

      <div>
        <p>
          With one day left for the 12th Jatiya Sangsad election, Awami League
          called a press briefing on Friday afternoon at its office in Tejgaon
          of the capital. A number of foreign journalists were also present at
          the briefing, along with local journalists. A foreign journalist at
          the briefing asked Obaidul Quader why Bangladesh was maintaining
          relations with China and Russia.
        </p>

        <div className="flex justify-center ">
          <Image src={thumbImg} width={500} height={500} alt="Thumb IMages" />
        </div>

        <ReadMoreBtn></ReadMoreBtn>
      </div>
    </div>
  );
}
