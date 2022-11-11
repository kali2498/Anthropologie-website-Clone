import React from "react";
import style from "../Routes/Home.module.css";
import SimpleImageSlider from "react-simple-image-slider";
import AwesomeSlider from 'react-awesome-slider';

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

const Home = () => {
  return (
    <div>
      <div className={style.imagestand}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/66gBHQY9rlKtf5IItLdMCa/eb48274717871eb64ba75900e042218f/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"
          alt="a"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/7FtJ5t3fiV8RM8Q80ufmqS/4b8d59935ecd871b8f0b1055665bbe09/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"
          alt="b"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/6Rg6bbVw5EcY8ZFGylD3Lt/52e96081fac4772cbd0e5aabda58219a/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp"
          alt="c"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/2jP2GsJVfSqC66yrxJJPOX/a4b3ecfc7c2a6de75aa10b764c9cfe9f/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp"
          alt="d"
        />
      </div>

      <div className={style.imagestand2}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp"
          alt="girl"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"
          alt="girl2"
        />
      </div>

      <div className={style.imagestand3}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"
          alt="1"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"
          alt="2"
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"
          alt="3"
        />
      </div>

     


    </div>
  );
};

export default Home;