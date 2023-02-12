import { ReviewData } from "../types";

const ReviewItem: React.FC<ReviewData> = ({
  imgUrl,
  username,
  dogname,
  reviewContent,
}) => {
  return (
    <li className="flex justify-between xs:gap-4 gap-2 w-full py-3 border-b border-[#aaa]">
      <img
        src={imgUrl}
        alt={dogname}
        className="sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 rounded-xl"
      />

      <div className="w-full">
        <p className="xs:text-sm text-xs">
          <strong className="font-medium xs:text-md text-xs">{username}</strong>{" "}
          님의 사이버 반려견
        </p>

        <h4 className="xs:text-lg text-xs font-semibold text-blue-500">
          {dogname}
        </h4>

        <p className="xs:text-sm text-xs break-all sm:line-clamp-3 xs:line-clamp-2 line-clamp-3">
          {reviewContent} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eos beatae animi amet iste. Exercitationem perferendis nobis
          praesentium, at corrupti fugit, magni totam sint, voluptates cumque
          ratione! Repellat rerum officia ratione.
        </p>
      </div>
    </li>
  );
};

export default ReviewItem;
