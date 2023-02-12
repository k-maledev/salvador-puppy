import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Selection } from "../component";
import { imageGeneration } from "../api/image-generation";
import { BREEDS, ACCESSORIES, LOCATIONS } from "../constants";
import styles from "../style";

const Create = () => {
  const [showingSelectionId, setShowingSelectionId] = useState<
    "breed" | "accessory" | "location"
  >("breed");

  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const navigate = useNavigate();

  const handleClickPrev = useCallback(() => {
    if (showingSelectionId === "accessory") {
      setShowingSelectionId("breed");
    } else if (showingSelectionId === "location") {
      setShowingSelectionId("accessory");
    }
  }, [showingSelectionId]);

  const handleSubmit = useCallback(async () => {
    const prompt = `${selectedBreed}, ${selectedAccessory}, ${selectedLocation}, photo`;

    const imgUrl = await imageGeneration(prompt);

    navigate("/create-result", {
      state: {
        imgUrl,
        selectedOptions: {
          breed: BREEDS.find((breed) => breed.id === selectedBreed)?.value,
          accessory: ACCESSORIES.find((breed) => breed.id === selectedAccessory)
            ?.value,
          location: LOCATIONS.find((breed) => breed.id === selectedLocation)
            ?.value,
        },
      },
    });
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
    <div className={`${styles.pageContainer} relative`}>
      <h2 className={`${styles.pageHeading} xs:mb-8`}>사이버 반려견 생성</h2>
      {showingSelection}

      {(showingSelectionId === "accessory" ||
        showingSelectionId === "location") && (
        <button
          className="absolute left-6 top-1.5 w-8 h-8"
          onClick={handleClickPrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Create;
