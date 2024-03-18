import Image from "next/image";
import imageHomeTwo from "../public/assets/images/homeTwo.png";
import imageHomeThree from "../public/assets/images/homeThree.png";
import SectionInform from "@/components/section/SectionInform/SectionInform";
import SectionNumber from "@/components/section/SectionNumber/SectionNumber";
import SectionAboutBusiness from "@/components/section/SectionAboutBusiness/SectionSectionAboutBusiness";

export default function Home() {
  return (
    <main className="">
      <SectionInform />
      <SectionNumber description="" number="" textTitle="" />
      <SectionAboutBusiness />
      <Image src={imageHomeThree} width={1920} height={750} alt="imageThree" />
    </main>
  );
}
