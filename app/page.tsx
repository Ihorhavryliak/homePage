import Image from "next/image";
import imageHomeOne from "../public/assets/images/homeOne.png";
import imageHomeTwo from "../public/assets/images/homeTwo.png";
import imageHomeThree from "../public/assets/images/homeThree.png";
import HomeTitle from "@/components/section/SectiionTitle/SectionTitle";
import SectionTitle from "@/components/section/SectiionTitle/SectionTitle";

export default function Home() {
  return (
    <main className="">
      <SectionTitle />
     

      <Image src={imageHomeTwo} width={1920} height={750} alt="imageTwo" />
      <Image src={imageHomeThree} width={1920} height={750} alt="imageThree" />
    </main>
  );
}
