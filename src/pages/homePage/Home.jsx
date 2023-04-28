import React from "react";
import HomeLanding from "../../components/landingPage/HomeLanding";
import LeftSideBar from "../../components/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/rightSideBar/RightSideBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div
      className={styles.homeMani}
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      <LeftSideBar style={{ gridRow: "1 / span 2" }} />
      <HomeLanding style={{ gridRow: "1 / span 3" }} />
      <RightSideBar style={{ gridRow: "1 / span 2" }} />

    </div>
  );
}

