import styles from "./CurveContainer.module.css";

export default function CurveContainer(props) {
  const classes = `${styles.container} ${props.className}`;

  return (
    <section className={classes} style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </section>
  );
}
