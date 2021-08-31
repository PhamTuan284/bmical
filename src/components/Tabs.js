export default function Tabs({
  classTabStandard,
  classTabMetric,
  TABS,
  handleTabs,
}) {
  return (
    <div className="tab d-flex justify-content-between">
      <div
        className={`tab-item tab-standard btn ${classTabStandard} me-5`}
        onClick={() => handleTabs(TABS.standard)}
      >
        Standard
      </div>
      <div
        className={`tab-item tab-standard btn ${classTabMetric}`}
        onClick={() => handleTabs(TABS.metric)}
      >
        Metric
      </div>
    </div>
  );
}
