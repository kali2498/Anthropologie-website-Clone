import React from "react";
import Slider from "../Pages/Slider";
import style from "../Routes/Home.module.css";
import Footer from "../Pages/Footer";

const Home = () => {
  return (
    <div>
      <div className={style.imagestand}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
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
        <button className={style.btn}>shop new clothing & accessories</button>

        <img
          src="https://images.ctfassets.net/5de70he6op10/6pgHrENVmjeLfmWwwGZuiG/7087546a3b3529f4de0de0ccedca384e/LS_M1b.jpg?w=1302&q=80&fm=webp"
          alt="girl2"
        />
        <button className={style.btn1}>shop jackets & coats</button>
      </div>

      <div className={style.imagestand3}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp"
          alt="1"
        />
        <button className={style.btn2}>shop sweaters</button>

        <img
          src="https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp"
          alt="2"
        />
        <button className={style.btn3}>shop cold-weather accessories</button>

        <img
          src="https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp"
          alt="3"
        />
        <button className={style.btn4}>shop pants</button>
      </div>

      <div className={style.imagestand4}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/sElVOkh1LlYRV8lFchscj/3fa66885dac24294a26ad182591b8639/ALiving_HPG_LS_01-1.jpg?w=2640&q=80&fm=webp"
          alt="14"
        />
        <button className={style.btn5}>shop gifts from home</button>
      </div>

      <div className={style.imagestand5}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp"
          alt="14"
        />
        <button className={style.btn6}>shop dresses</button>
      </div>

      <div className={style.imagestand6}>
        <img
          src="https://images.ctfassets.net/5de70he6op10/6qpsukHAAtvED0Tc12y84m/645098d9a2f3d0da07fc3ad86e11a228/RR_Bedding.jpg?w=856&q=80&fm=webp"
          alt="1"
        />
        <button className={style.btn7}>shop bedding, pillows & throws</button>

        <img
          src="https://images.ctfassets.net/5de70he6op10/7fzJY7mnX3XvCv1RNf6mTp/79d5f396c261126621d9a105c88faaf3/RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp"
          alt="2"
        />
        <button className={style.btn8}>shop kitchen & dining</button>

        <img
          src="https://images.ctfassets.net/5de70he6op10/6gih0n8sL6Nei296yMBw1g/8b3197b8943cd443c792f1d6458b3007/RR_Candles.jpg?w=856&q=80&fm=webp"
          alt="3"
        />
        <button className={style.btn9}>shop candles</button>
      </div>

      <div className={style.compoent}>
        <h1 clssName={style.heading1}>More to Explore</h1>
        <hr />
        <div className={style.compoentDiv}>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/4Uq666sNSwxPJkwfkNekwE/229e99ddfcc9ed0f9fb4c1d0d3f63df9/MTE_1.jpg?w=856&q=80&fm=webp"
              alt="undle"
            />
            <h2>new! BUNDLE with JOY</h2>
            <p>
              Save time (and $$$) with curated gift sets for everyone on your
              list.
            </p>
            <h4>shop gift bundles</h4>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/5HxUPMjRhRmYBhDzG7lYb8/8bd8da754c35f286701c479b6fb4885e/LS_MTE_2.jpg?w=856&q=80&fm=webp"
              alt="dsfds"
            />
            <h2>The Holiday Beauty Shop</h2>
            <p>Ready, set, let's glow gifting!</p>
            <h4>shop fragrance gifts, exclusive sets & more</h4>
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/673WCOKnBlUgppuS7WBHzB/fba4ac8902af41c13345308297b6c9f5/MTE_3.jpg?w=856&q=80&fm=webp"
              alt="fdcvf"
            />
            <h2>THE ART OF THE DRESS</h2>
            <p>
              Introducing a lovingly curated collection of sculptural
              silhouettes, enlightened details, and everlasting impressions.
            </p>
            <h4>shop BHLDN weddings</h4>
          </div>
        </div>
      </div>

      <div className={style.aboutusCompoent}>
        <h1>About Us</h1>
        <p>
          Our mission at Anthropologie has always been to surprise and delight
          you with unexpected, distinctive finds for your closet and home. We
          source and craft all of our products with care, ensuring that any
          treasure you find at Anthropologie is unique, just like you. Explore
          our dress shop to find styles and fits perfect for any occasion, from
          cocktail parties to weddings to{" "}
          <span id="text">
            casual daytime silhouettes. Browse party skirts, wide-leg pants and
            jeans, and blouses that will turn heads. Complete your look with
            uncommon accessories—think only-here slides and head-turning totes.
            Discover our expansive home collections, from furniture to curtains,
            decorative pillows to duvets, wall art to Moroccan-inspired rugs.
            Looking for a housewarming gift? Try a coffee table book, original
            glassware or a set of coasters.
          </span>
        </p>
      </div>

      <div></div>

      <Footer />
    </div>
  );
};

export default Home;
