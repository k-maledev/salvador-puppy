import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { sendFeedback } from "../api";
import { loadingState } from "../recoil";
import styles from "../style";

const CATEGORIES = [
  { id: 1, value: "life-changing", text: "외로웠던 내 삶이 달라졌어요." },
  { id: 2, value: "loveliness", text: "제 사이버 반려견은 정말 사랑스러워요!" },
  { id: 3, value: "good-dog", text: "어이구 말도 잘 듣고 착하다 우리 강아지" },
  { id: 4, value: "etc", text: "기타 의견" },
];

const Feedback = () => {
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState("");

  const setLoading = useSetRecoilState(loadingState);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);

      try {
        const response = await sendFeedback(category, content);

        if (response.success) {
          setLoading(false);
          alert("피드백이 전송되었습니다. 감사합니다.");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [category, content]
  );

  return (
    <div className={styles.pageContainer}>
      <h3 className={styles.pageHeading}>피드백을 남겨주세요.</h3>
      <form
        onSubmit={handleSubmit}
        className={`${styles.columnCenter} max-w-lg w-full gap-8 mt-8`}
      >
        <div className={`${styles.columnCenter} w-full`}>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none bg-transparent border-b border-b-[#f0f0f0] px-2 py-2 outline-none cursor-pointer"
            placeholder="카테고리를 선택해주세요."
            defaultValue=""
          >
            <option value="" disabled>
              카테고리를 선택해주세요.
            </option>
            {CATEGORIES.map((category) => (
              <option key={category.id} value={category.value}>
                {category.text}
              </option>
            ))}
          </select>
        </div>

        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-60 bg-transparent  outline-none px-3 py-2 border text-[#f0f0f0] border-[#aaa] focus:border-[#f0f0f0] resize-none "
          placeholder="내용을 작성해주세요. (10글자 이상)"
          minLength={10}
          maxLength={120}
        ></textarea>

        <button
          disabled={!category || content.trim().length < 10}
          className={`${styles.buttonOutlinedWhite} disabled:${styles.buttonDisabled}`}
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Feedback;
