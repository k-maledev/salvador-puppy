import { useMemo, useState } from "react";

import styles from "../style";
import sample1 from "../assets/sample-1.png";
import sample2 from "../assets/sample-2.png";
import sample3 from "../assets/sample-3.png";
import sample4 from "../assets/sample-4.png";
import sample5 from "../assets/sample-5.png";

const SAMPLES = [
  { id: 1, img: sample1 },
  { id: 2, img: sample2 },
  { id: 3, img: sample3 },
  { id: 4, img: sample4 },
  { id: 5, img: sample5 },
];

const Samples = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedSample = useMemo(() => {
    return SAMPLES[selectedIndex].img;
  }, [selectedIndex]);

  return (
    <section className={`${styles.columnCenter} xs:w-[75%] w-[90%]`}>
      <img
        src={selectedSample}
        className="sm:w-[320px] w-[80%] sm:mb-6 mb-4"
      ></img>

      <ul className="sm:w-[400px] w-[90%] flex justify-around sm:gap-4 gap-2">
        {SAMPLES.map((sample, index) => (
          <li key={sample.id}>
            <button
              onClick={() => setSelectedIndex(index)}
              className={`${
                selectedIndex === index
                  ? "border-2 border-red-500 scale-[1.1] shadow-sm transition-all shadow-[rgba(100,100,100,0.2)]"
                  : ""
              }`}
            >
              <img src={SAMPLES[index].img} className="w-max"></img>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Samples;
