import React, { Fragment } from "react";
import Card from "./Card";
import styles from "./GameOptions.module.css";
import ReusableSelect from "./ReusableSelect";

const GameOptions = () => {
  return (
    <Card>
      <section className={styles.options}>
        <ReusableSelect
          arrValues={[501, 401, 301]}
          label={"Points"}
          minWidth={"5rem"}
          initialVal={501}
        />
        <ReusableSelect
          arrValues={[1, 2, 3, 4, 5]}
          label={"Sets"}
          minWidth={"4rem"}
          initialVal={3}
        />
        <ReusableSelect
          arrValues={[1, 2, 3, 4, 5]}
          label={"Legs"}
          minWidth={"5rem"}
          initialVal={3}
        />
        <ReusableSelect
          arrValues={["single out", "double out"]}
          label={"Check out"}
          minWidth={"8rem"}
          initialVal={"single out"}
        />
      </section>
    </Card>
  );
};

export default GameOptions;
