import { Dispatch, SetStateAction } from "react";

import styles from "../style";

const Selection: React.FC<{
  title: string;
  options: { id: string; value: string }[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  onClickNext: () => void;
}> = ({ title, options, selectedOption, setSelectedOption, onClickNext }) => {
  return (
    <section className={styles.columnCenter}>
      <h4 className="text-2xl text-red-500 xs:mb-12 mb-8">{title}</h4>
      <ul className="flex flex-wrap justify-center gap-4 xs:mb-12 mb-8">
        {options.map((option) => (
          <li key={option.id}>
            <button
              onClick={() =>
                setSelectedOption(selectedOption === option.id ? "" : option.id)
              }
              className={`px-3 py-1.5 rounded-lg shadow-lg transition-transform duration-100 ${
                selectedOption === option.id
                  ? "bg-blue-500 font-medium scale-[1.08]"
                  : "bg-gray-700"
              }`}
            >
              {option.value}
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={!selectedOption}
        onClick={onClickNext}
        className={`${styles.buttonOutlinedWhite} disabled:${styles.buttonDisabled}`}
      >
        다음
      </button>
    </section>
  );
};

export default Selection;
