import { useInfiniteQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import { PhotoItem } from "../component";
import { getPhotos } from "../api";
import styles from "../style";
import { PhotoData } from "../types";
import Loading from "../component/Loading";

const Album = () => {
  const fetchPhotos = async (page: number) => {
    const response = await getPhotos(page);

    if (response.success) return response;
  };

  const { status, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<{ data: PhotoData[]; success: boolean; nextPage: number }>(
      {
        queryKey: ["photos"],
        getNextPageParam: (prevData) => prevData.nextPage,
        queryFn: ({ pageParam = 1 }) => fetchPhotos(pageParam),
      }
    );

  if (status === "error") return <p>앨범을 불러오는 데 실패했습니다.</p>;
  if (status === "loading") return <Loading />;

  return (
    <>
      <Helmet>
        <title>앨범 - 살바도르 퍼피</title>
      </Helmet>

      <div className={styles.pageContainer}>
        <h2 className={styles.pageHeading}>앨범</h2>

        <ul className="flex flex-col w-full">
          {data.pages
            .flatMap((data) => data.data)
            .map((photo) => (
              <PhotoItem key={photo._id} photo={photo} />
            ))}
        </ul>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className={`${
              isFetchingNextPage ? "animate-spin" : ""
            } mt-4 py-4 px-6`}
          >
            {isFetchingNextPage ? "🦴" : "더 보기"}
          </button>
        )}
      </div>
    </>
  );
};

export default Album;
