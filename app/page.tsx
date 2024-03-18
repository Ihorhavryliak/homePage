import SectionInform from "@/components/Section/SectionInform/SectionInform";
import SectionNumber from "@/components/Section/SectionNumber/SectionNumber";
import SectionAboutBusiness from "@/components/Section/SectionAboutBusiness/SectionSectionAboutBusiness";
import SectionCard from "@/components/Section/SectionCard/SectionCard";
import SectionContact from "@/components/Section/SectionContact/SectionContact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <SectionInform />
      <SectionNumber description="" number="" textTitle="" />
      <SectionAboutBusiness />
      <SectionNumber description="" number="" textTitle="" isReverse={true} />
      <SectionCard />
      <SectionNumber description="" number="" textTitle="" />
      <SectionContact />
      <Footer />
    </main>
  );
}
