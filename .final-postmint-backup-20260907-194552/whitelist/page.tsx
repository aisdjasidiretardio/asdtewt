"use client";

import { useEffect, useState } from "react";
import styles from "./post-mint.module.css";

const DRAW_TIME = new Date("2026-09-08T15:30:00Z").getTime();

function getTimeLeft() {
  const distance = Math.max(0, DRAW_TIME - Date.now());

  return {
    distance,
    hours: Math.floor(distance / (1000 * 60 * 60)),
    minutes: Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    ),
    seconds: Math.floor(
      (distance % (1000 * 60)) / 1000
    ),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function PostMintPage() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const live = time.distance <= 0;

  return (
    <main className={styles.page}>
      <div className={styles.frame}>
        <span className={`${styles.spark} ${styles.sparkOne}`}>
          ✦
        </span>

        <span className={`${styles.spark} ${styles.sparkTwo}`}>
          ✧
        </span>

        <section className={styles.content}>
          <p className={styles.eyebrow}>
            THE KINGDOM IS FULL
          </p>

          <h1 className={styles.title}>
            MINTED
            <br />
            <span>OUT.</span>
          </h1>

          {!live ? (
            <>
              <p className={styles.intro}>
                Drawing 7 winners in
              </p>

              <div className={styles.timer}>
                <div className={styles.timeUnit}>
                  <strong>{pad(time.hours)}</strong>
                  <span>HOURS</span>
                </div>

                <div className={styles.colon}>:</div>

                <div className={styles.timeUnit}>
                  <strong>{pad(time.minutes)}</strong>
                  <span>MINUTES</span>
                </div>

                <div className={styles.colon}>:</div>

                <div className={styles.timeUnit}>
                  <strong>{pad(time.seconds)}</strong>
                  <span>SECONDS</span>
                </div>
              </div>

              <p className={styles.date}>
                SEPTEMBER 8 · 3:30 PM UTC
              </p>
            </>
          ) : (
            <div className={styles.live}>
              THE DRAW IS LIVE.
            </div>
          )}

          <div className={styles.rule} />

          <p className={styles.copy}>
            Seven NFTs. Seven winners. $1,000 each.
          </p>

          <div className={styles.actions}>
            <a
              href="https://x.com/onecoin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              CHECK X FOR THE DRAW ↗
            </a>

            <a
              href="https://opensea.io/collection/onecoin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              GET YOUR NFT ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
