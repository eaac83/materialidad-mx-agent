export function Field({label,value,onChange,onBlur,type='text',placeholder=''}) {
  return <label>{label}<input type={type} value={value} placeholder={placeholder} onChange={e=>onChange(e.target.value)} onBlur={onBlur}/></label>;
}

export function MetricCard({number,title}) {
  return <div className="card"><strong>{number}</strong><span>{title}</span></div>;
}

export function StatusBadge({status}) {
  return <span className={status==='Suficiente'?'ok':'warn'}>{status}</span>;
}
