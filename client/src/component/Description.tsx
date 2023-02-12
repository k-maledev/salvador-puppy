import styles from "../style";

const Description = () => {
  return (
    <section className={`${styles.columnCenter} flex-col-reverse`}>
      <h3 className="font-Mansalva sm:text-5xl text-4xl">Salvador Puppy</h3>
      <p className="sm:text-lg text-sm text-center sm:mb-10 mb-6">
        세상에 하나 뿐인 나만의
        <strong className="text-red-500 sm:text-xl text-md">
          {" "}
          사이버 반려견
        </strong>
        을 만나게 해주는 <br />
        <span className="inline-block sm:text-2xl text-xl mt-2">
          <strong className="border-b font-normal">취향 기반</strong> 사이버
          반려견 생성 서비스
        </span>
      </p>
    </section>
  );
};

export default Description;
