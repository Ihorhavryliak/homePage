type SectionNumberType = {
  number: string;
  textTitle: string;
  description: string;
  isReverse?: boolean;
};

const SectionNumber = ({ number, textTitle, description, isReverse }: SectionNumberType) => {
  return (
    <section
      className={`d-flex align-items-center gap-47 justify-content-center w-100 ${
        isReverse && "flex-sm-row-reverse"
      }`}
    >
      <div className="text-600 fw-semibold text-white">01</div>
      <div className="">
        <div className="color-green-100 text-36 fw-medium">Reykjavik Fashion Festival —</div>
        <div className="color-gray-100">Branding, Interactive</div>
      </div>
    </section>
  );
};

export default SectionNumber;
