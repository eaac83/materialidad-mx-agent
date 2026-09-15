import {Field} from './ui';

export default function Companies({company,setCompany,companies,onLookup,onSave}) {
  return <>
    <h1>Alta de entidades</h1>
    <div className="panel grid">
      <Field label="RFC (llave única)" value={company.rfc} onChange={v=>setCompany({...company,rfc:v.toUpperCase()})} onBlur={onLookup}/>
      <Field label="Razón social" value={company.name} onChange={v=>setCompany({...company,name:v})}/>
      <Field label="Giro / actividad" value={company.trade} onChange={v=>setCompany({...company,trade:v})}/>
      <Field label="Descripción operativa" value={company.operation} onChange={v=>setCompany({...company,operation:v})}/>
      <Field label="Responsable" value={company.contact} onChange={v=>setCompany({...company,contact:v})}/>
      <label>Rol habitual<select value={company.role} onChange={e=>setCompany({...company,role:e.target.value})}><option>Cliente</option><option>Prestadora</option><option>Ambos</option></select></label>
      <button className="primary" onClick={onSave}>Guardar empresa</button>
    </div>
    <div className="panel"><h2>Base progresiva</h2>{companies.length===0?<p>Aún no hay empresas registradas.</p>:companies.map(c=><div className="row" key={c.rfc}><b>{c.rfc}</b><span>{c.name}</span><span>{c.trade||'—'}</span></div>)}</div>
  </>;
}
