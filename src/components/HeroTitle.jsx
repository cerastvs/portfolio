export default function HeroTitle({ classNames, text, style = {} }) {
  return (
    <h1
      className={classNames}
      style={{
        ...(text.size ? { fontSize: text.size } : {}),
        ...style,
      }}
    >
      {text.names}
    </h1>
  );
}