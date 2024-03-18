import React from "react";
import imageHomeTree from "../../../public/assets/images/homeThree.png";
import imageConversation from "../../../public/assets/images/conversation.png";

import Image from "next/image";

const SectionContact = () => {
  return (
    <section className="position-relative">
      <Image
        src={imageHomeTree}
        width={1920}
        height={530}
        alt="imageHomeOne"
        loading="lazy"
        style={{
          objectFit: "cover"
        }}
      />
      <div className="position-absolute t-237 d-flex w-100 justify-content-center top-0 gap-109">
        <div className="max-w-489 pt-120">
          <Image
            src={imageConversation}
            width={481}
            height={321}
            alt="imageHomeOne"
            loading="lazy"
            style={{
              objectFit: "cover"
            }}
          />
        </div>

        <div className="pt-210">
          <div className="color-green-100 text-36 fw-medium">Empire State Building</div>
          <p className="color-gray-100 mb-0 mt-11">350 5th Ave, New York, NY 10118</p>
          <p className="color-gray-100 mb-0 mt-11">1 212-736-3100</p>
          <p className="color-gray-100 mt-11 mb-0">contacts@esbnyc.com</p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;