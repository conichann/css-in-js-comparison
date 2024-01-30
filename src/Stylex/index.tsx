// https://stylexjs.com/docs/learn/
import stylex from "@stylexjs/stylex";

export const Stylex = () => {
  return (
    <section className={stylex(style.wrapper)}>
      <h1 className={stylex(style.title)}>Hello World!</h1>
    </section>
  );
};

const style = stylex.create({
  wrapper: {
    padding: "4em",
    background: "papayawhip",
  },
  title: {
    fontSize: "1.5em",
    textAlign: "center",
    color: "#bf4f74",
  },
});
