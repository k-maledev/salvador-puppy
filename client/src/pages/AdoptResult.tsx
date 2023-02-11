import { useLocation } from "react-router-dom";

const AdoptResult = () => {
  const { state } = useLocation();

  const imgUrl = state.imgUrl;

  console.log(imgUrl);

  return <div>AdoptResult</div>;
};

export default AdoptResult;
