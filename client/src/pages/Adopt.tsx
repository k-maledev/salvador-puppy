import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AdoptSelection } from "../component";
import { imageGeneration } from "../api/image-generation";
import { BREEDS, ACCESSORIES, LOCATIONS } from "../constants";
import styles from "../style";

const Adopt = () => {
  const [showingSelectionId, setShowingSelectionId] = useState<
    "breed" | "accessory" | "location"
  >("breed");

  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    const prompt = `${selectedBreed}, ${selectedAccessory}, ${selectedLocation}, photo`;

    const imgUrl = await imageGeneration(prompt);

    navigate("/adopt-result", {
      state: {
        imgUrl,
      },
    });
  }, [selectedBreed, selectedAccessory, selectedLocation]);

  let showingSelection;
  switch (showingSelectionId) {
    case "breed":
      showingSelection = (
        <AdoptSelection
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
        <AdoptSelection
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
        <AdoptSelection
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
