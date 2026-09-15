import {families} from '../lib/serviceCatalog';
import {Field} from './ui';

export default function NewCase({companies,exp,setExp,questions,sufficiency,onServiceChange,onSave}) {
  return <>
    <h1>Nuevo expediente</h1>
    <div className="panel grid">
      <label>Cliente<select value={exp.client} onChange={e=>setExp({...exp,client:e.target.value})}><option value="">Seleccionar…</option>{companies.map(c=><option key={'c-'+c.rfc} value={c.rfc}>{c.rfc} — {c.name}</option>)}</select></label>
      <label>Prestadora<select value={exp.provider} onChange={e=>setExp({...exp,provider:e.target.value})}><option value="">Seleccionar…</option>{companies.map(c=><option key={'p-'+c.rfc} value={c.rfc}>{c.rfc} — {c.name}</option>)}</select></label>
      <Field label="Descripción real / CFDI del servicio" value={exp.service} onChange={onServiceChange}/>
      <Field label="Clave SAT" value={exp.sat} onChange={v=>setExp({...exp,sat:v})}/>
      <Field label="Periodo" value={exp.period} onChange={v=>setExp({...exp,period:v})}/>
      <Field label="Monto antes de IVA" value={exp.amount} onChange={v=>setExp({...exp,amount:v})}/>
      <label>Familia propuesta<select value={exp.family} onChange={e=>setExp({...exp,family:e.target.value})}><option value="">Seleccionar…</option>{families.map(f=><option key={f}>{f}</option>)}</select></label>
    </div>
    {exp.family&&<div className="panel">
      <div className="meter"><b>Suficiencia: {sufficiency}%</b><progress value={sufficiency} max="100"/></div>
      <h2>Cuestionario inteligente</h2>
      {questions.map((q,i)=><label className="question" key={q}><span>{i+1}. {q}</span><textarea value={exp.answers[q]||''} onChange={e=>setExp({...exp,answers:{...exp.answers,[q]:e.target.value}})} placeholder="Respuesta / No disponible / No aplica"/></label>)}
      <button className="primary" onClick={onSave}>Guardar expediente</button>
    </div>}
  </>;
}
