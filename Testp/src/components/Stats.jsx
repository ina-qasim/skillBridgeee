function Stats({ icon, name, numb, variant }) {
  return (
    <div className="status-card">
      <div className="status-left">
        <div className={`status-icon icon-${variant}`}>{icon}</div>
        <span className="status-label">{name}</span>
      </div>
      <div className="status-value">{numb}</div>
    </div>
  );
}

export default Stats;
