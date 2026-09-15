import {MetricCard} from './ui';

export default function Dashboard({companies,cases}) {
  const sufficient=cases.filter(item=>item.status==='Suficiente').length;
  return <>
    <h1>Centro de expedientes</h1>
    <p className="lead">Soporte documental basado en hechos, trazabilidad y suficiencia.</p>
    <div className="cards">
      <MetricCard number={companies.length} title="Empresas registradas"/>
      <MetricCard number={cases.length} title="Expedientes"/>
      <MetricCard number={sufficient} title="Suficientes"/>
    </div>
    <div className="panel"><h2>Flujo operativo</h2><div className="flow">RFC → Empresas → Servicio → Clasificación → Cuestionario → Suficiencia → Expediente</div></div>
  </>;
}
