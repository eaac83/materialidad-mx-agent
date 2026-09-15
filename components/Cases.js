import {StatusBadge} from './ui';

export default function Cases({cases}) {
  return <><h1>Expedientes</h1><div className="panel">{cases.length===0?<p>Aún no hay expedientes.</p>:cases.map(c=><div className="case" key={c.id}><div><b>{c.service}</b><small>{c.client} → {c.provider} · {c.period||'Sin periodo'} · {c.family}</small></div><StatusBadge status={c.status}/></div>)}</div></>;
}
