import { FormEvent, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveAs } from "file-saver";

import { createReview } from "../api";
import styles from "../style";
import { NewReview } from "../types";
import { loadingState } from "../recoil";

const CreateResult = () => {
  const [username, setUsername] = useState("");
  const [dogname, setDogname] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const setLoading = useSetRecoilState(loadingState);

  const { state } = useLocation();
  const navigate = useNavigate();

  const { image, selectedOptions } = state;

  const handleDownload = useCallback(() => {
    saveAs(image, "image.jpeg");
  }, [image]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: NewReview = {
        image,
        username,
        dogname,
        reviewContent,
      };

      try {
        const response = await createReview(data);

        if (response.success) {
          setLoading(false);
          navigate("/reviews");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [image, username, dogname, reviewContent]
  );

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeading}>많이 예뻐해주세요 💘</h2>

      <div className="relative">
        <img
          src={image}
          alt="사이버 반려견"
          className="max-w-md w-full border border-b-0"
        />

        <button className="absolute bottom-3 right-4" onClick={handleDownload}>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>

      <ul className="flex flex-col gap-2 mb-12 max-w-md w-full py-2 pl-4 border border-t-0">
        <li>견종: {selectedOptions.breed}</li>
        <li>악세사리: {selectedOptions.accessory}</li>
        <li>장소: {selectedOptions.location}</li>
      </ul>

      <form
        className={`${styles.columnCenter} w-full max-w-md`}
        onSubmit={handleSubmit}
      >
        <h4 className="text-xl mb-6 w-full text-center py-2 bg-[#777]">
          후기 남기기
        </h4>

        <div className="flex flex-col gap-2 w-full max-w-sm mb-6">
          <label htmlFor="username" className="text-[#ccc]">
            고객님, 존함이 어찌 되세요?
          </label>
          <input
            id="username"
            type="text"
            className="w-54 mb-2 bg-transparent border-b-2 outline-none transition-all focus:border-b-[#f0f0f0] border-b-[#aaa] self-end text-xl tracking-wider pr-2 pb-1 text-right"
            maxLength={12}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="강형욱"
          />

          <label htmlFor="dogname" className="text-[#ccc]">
            사이버 반려견의 이름을 지어주세요!
          </label>
          <input
            id="dogname"
            type="text"
            className="w-54 bg-transparent border-b-2 outline-none transition-all focus:border-b-[#f0f0f0] border-b-[#aaa] self-end text-xl tracking-wider pr-2 pb-1 text-right"
            maxLength={12}
            value={dogname}
            onChange={(e) => setDogname(e.target.value)}
            placeholder="가디"
          />
        </div>

        <div className={`${styles.columnCenter} gap-2 w-full max-w-sm mb-6`}>
          <label
            htmlFor="review-content"
            className="block w-full ml-1 text-[#ccc]"
          >
            생생한 후기 남겨주세요~
          </label>
          <textarea
            id="review-content"
            className="block w-full h-40 outline-none px-4 py-2 bg-transparent border text-[#f0f0f0] border-[#aaa] focus:border-[#f0f0f0] resize-none"
            placeholder="내용을 작성해주세요. (10글자 이상)"
            minLength={10}
            maxLength={120}
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </div>

        <button
          disabled={
            username.trim().length < 2 ||
            dogname.trim().length < 2 ||
            reviewContent.trim().length < 10
          }
          className={styles.buttonOutlinedWhite}
        >
          작성완료
        </button>
      </form>
    </div>
  );
};

export default CreateResult;
