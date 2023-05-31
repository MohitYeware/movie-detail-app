import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (item) => {
  const { id, title, synopsis, backgroundImage } = item.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={backgroundImage?.url}
            alt="Movie Image"
            width={280}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`${synopsis.substring(0, 73)} ....`}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
