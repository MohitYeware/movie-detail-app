import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c4c171777emsh9d9245833601c2cp1a6199jsn24181b8aa05a",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result[0]?.details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {" "}
        Netflix \ <span> {data?.type} </span>{" "}
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
