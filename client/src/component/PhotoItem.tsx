import { useEffect, useState } from "react";

import { PhotoData } from "../types";
import placeholder from "../assets/placeholder.png";
import PhotoModal from "./PhotoModal";

const PhotoItem: React.FC<{ photo: PhotoData }> = ({ photo }) => {
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { imgUrl, username, dogname, content } = photo;

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  return (
    <>
      <li
        onClick={() => setIsModalOpen(true)}
        className="flex justify-between xs:gap-4 gap-2 w-full py-3 border-b border-[#aaa] cursor-pointer"
      >
        <img
          src={loaded ? imgUrl : placeholder}
          onLoad={() => setLoaded(true)}
          alt={dogname}
          className="sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 rounded-md"
        />

        <div className="w-full">
          <h4 className="xs:text-lg text-xs font-semibold text-blue-500">
            {dogname}
          </h4>

          <p className="mb-1">
            <strong className="font-medium xs:text-md text-sm">
              {username}
            </strong>
            <span className="xs:text-sm text-xs">님의 사이버 반려견</span>
          </p>

          <p className="xs:text-sm text-xs break-all sm:line-clamp-3 xs:line-clamp-2 line-clamp-3">
            {content}
          </p>
        </div>
      </li>
      {isModalOpen && (
        <PhotoModal photo={photo} handleClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default PhotoItem;
