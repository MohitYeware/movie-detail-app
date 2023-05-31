import { RAPID_URL } from "../../utils/constants";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  };

  const response = await fetch(RAPID_URL, options);
  const result = await response.json();
  const data = result.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies & Series</h1>
          <div className={styles.card_section}>
            {data?.length > 0 ? (
              data?.map((item) => {
                return (
                  <MovieCard
                    key={item.id}
                    {...item}
                  />
                );
              })
            ) : (
              <p>
                There was some problem loading data. Please try again after some
                time.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
