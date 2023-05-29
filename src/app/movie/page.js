import { RAPID_URL } from "../utils/constants";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c4c171777emsh9d9245833601c2cp1a6199jsn24181b8aa05a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
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
            {data.map((item) => {
              return (
                <MovieCard
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
