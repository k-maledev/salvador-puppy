import styles from "../style";

import tossQrcode from "../assets/toss-qrcode.jpg";

const Donate = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageHeading}>살바도르 퍼피 후원하기</h2>
      <img
        src={tossQrcode}
        alt="토스 계좌 QR코드"
        className="xs:w-64 xs:h-64 w-48 h-48 mb-12"
      />

      <p className="max-w-md xs:text-lg text-md">
        사이버 반려견을 한 마리 생성할 때마다{" "}
        <strong className="text-red-500">약 25원</strong>이 사용됩니다. 외로운
        사람들을 최대한 많이 돕고자 생성 회수 제한을 두지 않았습니다.
        <br />
        <br />
        의도치 않게 너무 많은 강아지를 생성하셨다면, 위{" "}
        <span className="border-b-2">QR 코드를 스캔</span>하여 죄책감을 덜 수도
        있습니다.
      </p>
    </div>
  );
};

export default Donate;
