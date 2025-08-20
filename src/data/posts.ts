export interface Post {
  id: number;
  title: string;
  image: string;
  slug: string;
  content?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "SHM no Setor Ferroviário: Da Inspeção Visual ao Monitoramento Inteligente",
    image: "https://images.unsplash.com/photo-1729606883845-95ded8f9e3c5?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "shm-setor-ferroviario",
    content: "Conteúdo do artigo será adicionado em breve..."
  },
  {
    id: 2,
    title: "Gêmeos Digitais na Engenharia: Ponte entre o Físico e o Digital",
    image: "https://images.unsplash.com/photo-1620103658516-86f82c9ded4b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "gemeos-digitais-engenharia",
    content: "Conteúdo do artigo será adicionado em breve..."
  },
  {
    id: 3,
    title: "Indústria 4.0: a Evolução que Está Transformando a Engenharia",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "industria-4-0-evolucao",
    content: "Conteúdo do artigo será adicionado em breve..."
  },
  {
    id: 4,
    title: "A Importância da Manutenção Preditiva e do Monitoramento Contínuo em Infraestruturas",
    image: "https://images.unsplash.com/photo-1485310818226-f01c4269687f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "manutencao-preditiva-monitoramento",
    content: "Conteúdo do artigo será adicionado em breve..."
  },
];