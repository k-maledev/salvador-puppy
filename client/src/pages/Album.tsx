import { useInfiniteQuery } from "@tanstack/react-query";

import { PageContainer } from "../layout";
import { PhotoItem, Loading } from "../component";
import { getPhotos } from "../api";
import { PhotoData } from "../types";
import styles from "../style";

const Album = () => {
  const fetchPhotos = async (page: number) => {
    return await getPhotos(page);
  };

  const { status, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery<{ data: PhotoData[]; nextPage: number }>({
      queryKey: ["photos"],
      getNextPageParam: (prevData) => prevData.nextPage,
      queryFn: ({ pageParam = 1 }) => fetchPhotos(pageParam),
    });

  return (
    <PageContainer title="앨범 - 살바도르 퍼피">
      <h2 className={styles.pageHeading}>앨범</h2>

      {status === "error" && <p>앨범 불러오기 실패</p>}

      {status === "loading" && <Loading />}

      {status === "success" && (
        <>
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
                isFetchingNextPage ? "animate-spin" : "border-b"
              } mt-6 py-2 px-3`}
            >
              {isFetchingNextPage ? "🦴" : "더 보기"}
            </button>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Album;
