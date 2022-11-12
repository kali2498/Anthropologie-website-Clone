import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
      url: "https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp",
    },
    {
      url: "https://www.anthropologie.com/home-gifts?feature-product-ids=AN-45549459AA-000,AN-45549273AA-000,AN-51556702-000,AN-69978476-000",
    },
    {
      url: "https://images.ctfassets.net/5de70he6op10/3no3vcSJTVoCfU0Xmz31Vn/e2f584c43ba1ab614e3376db991de762/ALiving_HPG_LS_01-3_2x.jpg?w=2640&q=80&fm=webp",
    },
  ];


  const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }
  export default Slider

