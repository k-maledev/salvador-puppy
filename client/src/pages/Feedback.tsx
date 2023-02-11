import { FormEvent, useCallback, useState } from "react";

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

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(category);
    console.log(content);
  }, []);

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
          >
            <option value="" disabled selected>
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
          className="w-full h-60 text-[#333] outline-none px-3 py-2 resize-none"
          placeholder="내용을 작성해주세요. (10글자 이상)"
          minLength={10}
        ></textarea>

        <button
          disabled={!category || content.trim().length < 10}
          className={`${styles.buttonWhite} disabled:${styles.buttonWhiteDisabled}`}
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Feedback;
