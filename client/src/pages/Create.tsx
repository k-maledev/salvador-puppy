import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { PageContainer } from "../layout";
import { Selection } from "../component";
import { generateImage } from "../api";
import { BREEDS, ACCESSORIES, LOCATIONS } from "../constants";
import { loadingState } from "../recoil";
import styles from "../style";

const Create = () => {
  const [showingSelectionId, setShowingSelectionId] = useState<
    "breed" | "accessory" | "location"
  >("breed");

  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const setLoading = useSetRecoilState(loadingState);

  const navigate = useNavigate();

  const shuffledBreeds = useMemo(() => {
    return BREEDS.sort((_a, _b) => 0.5 - Math.random());
  }, []);

  const shuffledAccessories = useMemo(() => {
    return ACCESSORIES.sort((_a, _b) => 0.5 - Math.random());
  }, []);

  const shuffledLocations = useMemo(() => {
    return LOCATIONS.sort((_a, _b) => 0.5 - Math.random());
  }, []);

  const handleClickPrev = useCallback(() => {
    if (showingSelectionId === "accessory") {
      setShowingSelectionId("breed");
    } else if (showingSelectionId === "location") {
      setShowingSelectionId("accessory");
    }
  }, [showingSelectionId]);

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    const prompt = `${selectedBreed}, ${selectedAccessory}, ${selectedLocation}, photo`;

    try {
      const response = await generateImage(prompt);

      const image = `data:image/jpeg;base64,${response.data}`;
      const selectedOptions = {
        breed: BREEDS.find((breed) => breed.id === selectedBreed)?.value,
        accessory: ACCESSORIES.find((breed) => breed.id === selectedAccessory)
          ?.value,
        location: LOCATIONS.find((breed) => breed.id === selectedLocation)
          ?.value,
      };

      navigate("/create-result", {
        state: {
          image,
          selectedOptions,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [selectedBreed, selectedAccessory, selectedLocation]);

  let showingStage = 1;
  let showingSelection;

  switch (showingSelectionId) {
    case "breed":
      showingStage = 1;
      showingSelection = (
        <Selection
          title="견종"
          options={shuffledBreeds}
          selectedOption={selectedBreed}
          setSelectedOption={setSelectedBreed}
          onClickNext={() => setShowingSelectionId("accessory")}
        />
      );
      break;
    case "accessory":
      showingStage = 2;
      showingSelection = (
        <Selection
          title="악세사리"
          options={shuffledAccessories}
          selectedOption={selectedAccessory}
          setSelectedOption={setSelectedAccessory}
          onClickNext={() => setShowingSelectionId("location")}
        />
      );
      break;
    case "location":
      showingStage = 3;
      showingSelection = (
        <Selection
          title="장소"
          options={shuffledLocations}
          selectedOption={selectedLocation}
          setSelectedOption={setSelectedLocation}
          onClickNext={handleSubmit}
          isLastStage
        />
      );
      break;

    default:
      break;
  }

  return (
    <PageContainer
      title="사이버 반려견 생성 - 살바도르 퍼피"
      className="relative"
    >
      <h2 className={`${styles.pageHeading} xs:mb-8`}>사이버 반려견 생성</h2>

      <span className="mb-2">{showingStage} / 3 단계</span>
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
    </PageContainer>
  );
};

export default Create;
