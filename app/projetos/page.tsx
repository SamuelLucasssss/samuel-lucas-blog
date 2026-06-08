export const metadata = {
  title: 'Projetos',
  description: 'Projetos e linhas de estudo de Samuel Lucas em saúde, dados, IA e oncologia.'
};

const projects = [
  ['Jornada do paciente oncológico', 'Organização de etapas críticas para reduzir atrasos, falhas de comunicação e perda de previsibilidade.'],
  ['Compras estratégicas em saúde', 'Análise de custo-benefício, prazo, logística, estoque, compatibilidade e impacto no fluxo de caixa.'],
  ['IA aplicada à operação', 'Uso de inteligência artificial para relatórios, priorização, alertas e melhoria contínua em clínicas e hospitais.']
];

export default function ProjetosPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Projetos</p>
      <h1>Linhas de trabalho que conectam gestão, dados e cuidado.</h1>
      <div className="cards3">
        {projects.map(([title, text]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
