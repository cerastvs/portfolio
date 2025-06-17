export default function ValueCard({ headding, subHeadding, last }) {
  if (last) {
    return (
      <div className="skill last">
        <h3 className="skill-heading">{headding}</h3>
        <p className="skill-sub-heading">{subHeadding}</p>
      </div>
    );
  }

  return (
    <div className="skill">
      <h3 className="skill-heading">{headding}</h3>
      <p className="skill-sub-heading">{subHeadding}</p>
    </div>
  );
}
