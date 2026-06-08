export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com Samuel Lucas.'
};

export default function ContatoPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Contato</p>
      <h1>Vamos conversar sobre gestão, dados e saúde.</h1>
      <p className="lead">Para conexões profissionais, parcerias, projetos e discussões sobre IA aplicada à saúde.</p>
      <div className="contentBox">
        <p><strong>LinkedIn:</strong> adicione aqui o link do seu perfil.</p>
        <p><strong>E-mail:</strong> adicione aqui um e-mail profissional.</p>
        <p>Na próxima versão podemos incluir formulário com Supabase para salvar contatos e interessados.</p>
      </div>
    </section>
  );
}
