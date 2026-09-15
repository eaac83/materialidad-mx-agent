export const families = [
  'Consultoría / Asesoría',
  'Comercio Exterior / Aduanero',
  'Administración / Gestión',
  'Comercialización / Ventas',
  'Publicidad / Mercadotecnia',
  'TI / Sistemas',
  'Capacitación',
  'Mantenimiento Industrial',
  'Ingeniería / Proyectos Técnicos',
  'Construcción / Obra',
  'Recursos Humanos',
  'Logística / Operaciones'
];

export const universalQuestions = [
  '¿Por qué contrató el cliente este servicio?',
  '¿Qué comprendía el alcance?',
  '¿Qué hizo concretamente la prestadora?',
  '¿Qué recibió finalmente el cliente?',
  '¿Qué resultado verificable se obtuvo?',
  '¿Qué soporte documental existe?'
];

export const familyQuestions = {
  'Consultoría / Asesoría': ['¿Qué necesidad concreta originó la consultoría?','¿Qué información fue analizada?','¿Qué metodología o criterio se utilizó?','¿Qué recomendaciones o conclusiones se entregaron?'],
  'Comercio Exterior / Aduanero': ['¿Qué proceso aduanero o de comercio exterior fue objeto de asesoría?','¿Existieron operaciones o documentos específicos del periodo?','¿Qué riesgos, criterios o requisitos fueron analizados?','¿Qué recomendaciones, matrices o checklists se generaron?'],
  'Mantenimiento Industrial': ['¿Qué equipo o instalación fue intervenido?','¿Dónde se encuentra?','¿Cuál era su condición inicial?','¿Qué trabajos, materiales o refacciones se utilizaron?','¿Qué pruebas o verificaciones finales se realizaron?'],
  'Ingeniería / Proyectos Técnicos': ['¿Qué sistema, equipo o proyecto fue objeto de ingeniería?','¿Qué información técnica de entrada se recibió?','¿Qué cálculos, diseños o planos se desarrollaron?','¿Qué entregables técnicos se generaron?'],
  'Construcción / Obra': ['¿Cuál fue el frente o área de trabajo?','¿Qué actividades físicas se ejecutaron?','¿Qué materiales y equipos se utilizaron?','¿Cómo se verificó el avance o terminación?'],
  'TI / Sistemas': ['¿Qué sistema o plataforma fue atendido?','¿Qué incidencias, requerimientos o actividades se realizaron?','¿Qué registros o tickets existen?','¿Qué resultado técnico se obtuvo?'],
  'Capacitación': ['¿Cuál fue el tema y objetivo de la capacitación?','¿Quiénes participaron?','¿Qué material o contenido se impartió?','¿Existe lista de asistencia o evaluación?']
};

export function classifyService(value='') {
  const text=value.toLowerCase();
  if (/aduan|comercio exterior|import|export/.test(text)) return 'Comercio Exterior / Aduanero';
  if (/manten|repar|equipo|maquinaria/.test(text)) return 'Mantenimiento Industrial';
  if (/ingenier|diseñ|plano|cálculo/.test(text)) return 'Ingeniería / Proyectos Técnicos';
  if (/constru|obra|estructura|instalación/.test(text)) return 'Construcción / Obra';
  if (/software|sistema|soporte|mesa de ayuda|\bti\b/.test(text)) return 'TI / Sistemas';
  if (/capacita|curso|taller/.test(text)) return 'Capacitación';
  if (/publicidad|marketing|imagen/.test(text)) return 'Publicidad / Mercadotecnia';
  if (/venta|comercializa|prospecci|información comercial/.test(text)) return 'Comercialización / Ventas';
  if (/logíst|almac|distribu/.test(text)) return 'Logística / Operaciones';
  if (/recluta|recursos humanos|personal/.test(text)) return 'Recursos Humanos';
  if (/administra|gestión|control documental/.test(text)) return 'Administración / Gestión';
  return 'Consultoría / Asesoría';
}
