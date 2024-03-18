type SectionNumberType = {
  number: string;
  textTitle: string;
  description: string;
};

const SectionNumber = ({ number, textTitle, description }: SectionNumberType) => {
  return (
    <section className="d-flex align-items-center gap-47 justify-content-center h-60 w-100">
      <div className="text-600 fw-semibold text-white">01</div>
      <div className="">
        <div className="color-green-100 text-36 fw-medium">Reykjavik Fashion Festival —</div>
        <div className="color-gray-100">Branding, Interactive</div>
      </div>
    </section>
  );
};

export default SectionNumber;
