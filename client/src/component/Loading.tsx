import styles from "../style";

const Loading = () => {
  return (
    <div
      className={`${styles.flexCenter} fixed z-50 top-0 right-0 bottom-0 left-0 `}
    >
      <div className="backdrop-blur-[2px] absolute w-full h-full bg-[rgba(0,0,0,0.6)]"></div>

      <div className="relative text-center">
        <div className="text-5xl animate-bounce">🦴</div>
      </div>
    </div>
  );
};

export default Loading;
