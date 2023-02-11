import styles from "../style";

const AdoptAnimation = () => {
  return (
    <section className={`${styles.columnCenter} sm:w-[90%] w-[80%]`}>
      <div className="relative w-[85%] sm:h-32 xs:h-24 h-20 overflow-hidden border-b-2 border-[rgba(0,0,0,0.1)]">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 sm:text-7xl xs:text-6xl text-5xl animate-[face-expression_1.5s_ease-out_infinite]">
          😆
        </span>
        <span className="absolute left-0 top-1/2 -translate-y-1/2 sm:text-7xl xs:text-6xl text-5xl animate-[face-expression_1.5s_ease-out_infinite,face-disappear_6s_ease-out_infinite]">
          😢
        </span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 sm:text-7xl xs:text-6xl text-5xl animate-[dog-move_6s_linear_infinite,dog-bounce_0.5s_ease_infinite]">
          🐩
        </span>
      </div>
    </section>
  );
};

export default AdoptAnimation;
