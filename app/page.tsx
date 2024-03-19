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
      <div className="-mt-328 -mb-468 h-708 hidden">
        <div className="position-relative -top-131">
          <SectionNumber description="" number="" textTitle="" />
        </div>
      </div>

      <SectionAboutBusiness />

      <div className="-mt-398 -mb-268 h-708  hidden">
        <div className="position-relative -top-131">
          <SectionNumber description="" number="" textTitle="" isReverse={true} />
        </div>
      </div>

      <SectionCard />

      <div className="-mt-329 -mb-415">
        <div className="position-relative">
          <SectionNumber description="" number="" textTitle="" />
        </div>
      </div>

      <SectionContact />
      <Footer />
    </main>
  );
}
