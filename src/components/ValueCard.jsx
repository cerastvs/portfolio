export default function ValueCard({ headding, subHeadding, last }) {
  return (
    <div className={`skill${last ? " last" : ""}`}>
      <h3 className="skill-heading">{headding}</h3>
      <p className="skill-sub-heading">{subHeadding}</p>
    </div>
  );
}
