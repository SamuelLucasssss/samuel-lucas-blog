export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com Samuel Lucas para conexões profissionais sobre gestão em saúde, dados, IA e oncologia.'
};

export default function ContatoPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Contato</p>
      <h1>Vamos conversar sobre gestão, dados e saúde.</h1>
      <p className="lead">Para conexões profissionais, parcerias, projetos e discussões sobre IA aplicada à saúde, eficiência operacional e jornada do paciente oncológico.</p>
      <div className="contentBox">
        <h2>Contato profissional</h2>
        <p><strong>E-mail:</strong> <a href="mailto:contato@sallusflow.com.br">contato@sallusflow.com.br</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/5562992499048?text=Ol%C3%A1%2C%20Samuel.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20gest%C3%A3o%20em%20sa%C3%BAde%2C%20dados%20e%20IA." target="_blank" rel="noreferrer">(62) 9 9249-9048</a></p>
        <p>Use este canal para conversas sobre gestão em saúde, projetos, artigos, parcerias, tecnologia, dados e inteligência artificial aplicada à operação.</p>
        <div className="actions">
          <a className="button primary" href="https://wa.me/5562992499048?text=Ol%C3%A1%2C%20Samuel.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20gest%C3%A3o%20em%20sa%C3%BAde%2C%20dados%20e%20IA." target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          <a className="button secondary" href="mailto:contato@sallusflow.com.br">Enviar e-mail</a>
        </div>
      </div>
    </section>
  );
}
