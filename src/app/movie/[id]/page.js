import styles from "@/app/styles/common.module.css";
import { INFO_URL } from "@/utils/constants";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  };

  const response = await fetch(INFO_URL + id, options);
  const result = await response.json();
  const data = result[0]?.details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Watch on Netflix \ <span> {data?.type} </span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={data?.backgroundImage.url}
            alt={data?.title}
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1>{data?.title}</h1>
          <p>{data?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
