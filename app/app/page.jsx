import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div>
      <div>
        <Image
          src="/images/CandleHome.jpg"
          alt="placeholder"
          className={styles.aboutImage}
          width={1920}
          height={500}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.titleText}>Essence</h2>
        <p>
          Ignite your senses with our delightful scents! Essence Candles brings
          magic and warmth to every corner. Let our candles light up your world
          and fill it with joy, one flicker at a time. Discover your perfect
          match and let the glow speak for you!
        </p>
      </div>
    </div>
  );
}
