import React, { Fragment } from "react";
import styles from "./GameOptions.module.css";
import ReusableSelect from "./ReusableSelect";

const GameOptions = () => {
  return (
    <Fragment>
      <section className={styles.options}>
        <ReusableSelect arrValues={[501, 401, 301]} label={"Points"} />
        <ReusableSelect
          arrValues={[1, 2, 3, 4, 5]}
          label={"Sets"}
          minWidth={"5rem"}
        />
        <ReusableSelect
          arrValues={[1, 2, 3, 4, 5]}
          label={"Legs"}
          minWidth={"5rem"}
        />
        <ReusableSelect
          arrValues={["single out", "double out"]}
          label={"Check out"}
          minWidth={"8rem"}
        />
      </section>
    </Fragment>
  );
};

export default GameOptions;
