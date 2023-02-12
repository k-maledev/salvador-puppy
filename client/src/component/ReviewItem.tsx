import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReviewData } from "../types";
import placeholder from "../assets/placeholder.png";

const ReviewItem: React.FC<ReviewData> = ({
  _id,
  imgUrl,
  username,
  dogname,
  reviewContent,
}) => {
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(async () => {
    navigate(`/reviews/${_id}`);
  }, [_id]);

  return (
    <li
      onClick={handleClick}
      className="flex justify-between xs:gap-4 gap-2 w-full py-3 border-b border-[#aaa] cursor-pointer"
    >
      <img
        src={loaded ? imgUrl : placeholder}
        onLoad={() => setLoaded(true)}
        alt={dogname}
        className="sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 rounded-md"
      />

      <div className="w-full">
        <p>
          <strong className="font-medium xs:text-md text-sm">{username}</strong>
          <span className="xs:text-sm text-xs">님의 사이버 반려견</span>
        </p>

        <h4 className="xs:text-lg text-xs font-semibold text-blue-500">
          {dogname}
        </h4>

        <p className="xs:text-sm text-xs break-all sm:line-clamp-3 xs:line-clamp-2 line-clamp-3">
          {reviewContent}
        </p>
      </div>
    </li>
  );
};

export default ReviewItem;
