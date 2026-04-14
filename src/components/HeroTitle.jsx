export default function HeroTitle({ classNames, text }) {
  return (
    <h1 className={classNames} style={{ fontSize: text.size }}>
      {text.names}
    </h1>
  );
}