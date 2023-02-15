import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";

import { PhotoItem } from "../component";
import { getPhotos } from "../api";
import styles from "../style";
import { PhotoData } from "../types";
import Loading from "../component/Loading";

const Album = () => {
  const loadPhotos = async () => {
    const response = await getPhotos();
    if (response.success) return response.data.reverse();
  };

  const { data, status } = useQuery<PhotoData[]>("photos", loadPhotos);

  return (
    <>
      <Helmet>
        <title>앨범 - 살바도르 퍼피</title>
      </Helmet>

      <div className={styles.pageContainer}>
        <h2 className={styles.pageHeading}>앨범</h2>

        {status === "error" && <p>앨범 불러오기 실패</p>}

        {status === "success" && data.length > 0 && (
          <ul className="flex flex-col w-full">
            {data.map((photo) => (
              <PhotoItem key={photo._id} photo={photo} />
            ))}
          </ul>
        )}
      </div>

      {status === "loading" && <Loading />}
    </>
  );
};

export default Album;
