import styles from "../style";

const Overview = () => {
  return (
    <section className={`${styles.columnCenter}`}>
      <div className="opacity-40">
        <div className="sm:text-[240px] text-[180px] sm:w-[240px] sm:h-[240px] w-[180px] h-[180px] leading-[0.9] animate-pulse sm:mb-10 mb-6 invert">
          😭
        </div>
      </div>
      <h3 className="sm:text-4xl text-2xl sm:mb-12 mb-8">
        "나만 강아지 없어!"
      </h3>
      <p className="text-center">
        범지구적인 사회문제가 되어버린
        <br className="sm:hidden block" />
        <strong className="inline-block text-red-500 sm:text-xl text-lg mb-4 sm:ml-1 ml-0">
          유행성 반려견 결핍
        </strong>
        <span className="block text-xl">살바도르 퍼피가 해결합니다.</span>
      </p>
    </section>
  );
};

export default Overview;
