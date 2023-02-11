import { Dispatch, SetStateAction, useCallback, useState } from "react";

import { BREEDS, ACCESSORIES, LOCATIONS } from "../constants";
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
                  ? "bg-gray-600 font-medium scale-[1.08]"
                  : "bg-gray-400"
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
        className={`${styles.buttonWhite} disabled:${styles.buttonWhiteDisabled}`}
      >
        다음
      </button>
    </section>
  );
};

const Adopt = () => {
  const [showingSelectionId, setShowingSelectionId] = useState<
    "breed" | "accessory" | "location"
  >("breed");

  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleSubmit = useCallback(() => {
    const prompt = `${selectedBreed}, ${selectedAccessory}, ${selectedLocation}, photo`;
    console.log(prompt);
    // [TO-DO]
  }, [selectedBreed, selectedAccessory, selectedLocation]);

  let showingSelection;
  switch (showingSelectionId) {
    case "breed":
      showingSelection = (
        <Selection
          title="견종"
          options={BREEDS}
          selectedOption={selectedBreed}
          setSelectedOption={setSelectedBreed}
          onClickNext={() => setShowingSelectionId("accessory")}
        />
      );
      break;
    case "accessory":
      showingSelection = (
        <Selection
          title="악세사리"
          options={ACCESSORIES}
          selectedOption={selectedAccessory}
          setSelectedOption={setSelectedAccessory}
          onClickNext={() => setShowingSelectionId("location")}
        />
      );
      break;
    case "location":
      showingSelection = (
        <Selection
          title="장소"
          options={LOCATIONS}
          selectedOption={selectedLocation}
          setSelectedOption={setSelectedLocation}
          onClickNext={handleSubmit}
        />
      );
      break;

    default:
      break;
  }

  return (
    <div className={styles.pageContainer}>
      <h2 className={`${styles.pageHeading} xs:mb-8`}>사이버 반려견 입양</h2>

      {showingSelection}
    </div>
  );
};

export default Adopt;
