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
    title: "SHM no setor ferroviário: da inspeção visual ao Monitoramento Inteligente",
    image: "https://images.unsplash.com/photo-1729606883845-95ded8f9e3c5?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "shm-setor-ferroviario",
    content: "A segurança e a eficiência de uma malha ferroviária dependem da integridade da via permanente. Historicamente, a inspeção visual e medições periódicas em intervalos prolongados eram os métodos mais utilizados. Porém, estes se mostram insuficientes para detectar falhas críticas não visíveis, como microfraturas ou desgastes acelerados. Essa limitação resulta em uma detecção tardia, quando o problema já está instalado.\n\nNesse contexto, a Engenharia 4.0 oferece a solução: Sistemas de Monitoramento da Saúde Estrutural — do inglês 𝘚𝘵𝘳𝘶𝘤𝘵𝘶𝘳𝘢𝘭 𝘏𝘦𝘢𝘭𝘵𝘩 𝘔𝘰𝘯𝘪𝘵𝘰𝘳𝘪𝘯𝘨 (𝘚𝘏𝘔) — baseados em sensores, IoT e Inteligência Artificial (IA) permitem coletar dados contínuos, antes inacessíveis. Essa análise contínua dos dados possibilita a previsão de falhas e desgastes com uma precisão inédita.\n\nA tecnologia transforma a manutenção reativa em preditiva. Com o SHM, a segurança das ferrovias pode estar sempre um passo à frente, garantindo a previsibilidade necessária para uma malha ferroviária mais segura e eficiente."
  },
  {
    id: 2,
    title: "Gêmeos Digitais na engenharia: ponte entre o físico e o digital",
    image: "https://images.unsplash.com/photo-1620103658516-86f82c9ded4b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "gemeos-digitais-engenharia",
    content: "O termo Gêmeos Digitais se refere a representações virtuais de estruturas físicas que se mantêm constantemente atualizadas com dados coletados por sensores e bases digitais complementares. Essa representação digital reflete em tempo real o estado e o comportamento do ativo no mundo físico, o que permite monitorar e prever seu desempenho com base em informações coletadas continuamente. Na engenharia, essa tecnologia tem sido aplicada no acompanhamento da integridade de estruturas como pontes, viadutos, edifícios e outras infraestruturas críticas. Seu uso permite o reconhecimento antecipado de falhas, o controle da degradação ao longo do tempo e a simulação de diferentes cenários operacionais. Além de apoiar estratégias de manutenção preditiva, os gêmeos digitais também oferecem suporte a decisões de planejamento urbano e gestão de riscos, especialmente em áreas com alta vulnerabilidade estrutural. Ao conectar o físico ao digital, essa tecnologia transforma a maneira como gerenciamos e preservamos as infraestruturas."
  },
  {
    id: 3,
    title: "Indústria 4.0: a evolução que está transformando a engenharia",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "industria-4-0-evolucao",
    content: "A Indústria 4.0 representa a integração entre tecnologias digitais, inteligência artificial, automação e o uso massivo de dados em tempo real. Ela está moldando o futuro da produção e da gestão de ativos, com impactos diretos em áreas como transporte, infraestrutura e, claro, a Engenharia Civil. Um dos pilares dessa revolução é a Internet das Coisas (IoT) — sensores conectados à internet que captam, transmitem e permitem a análise de dados instantaneamente. É com base nessa tecnologia que a Safena atua: usamos inteligência em monitoramento para garantir que pontes e estruturas críticas sejam acompanhadas com precisão, segurança e visão de futuro. Na era da Indústria 4.0, estruturas não apenas existem — elas se comunicam. E a Safena está nessa conversa, traduzindo sinais em decisões inteligentes."
  },
  {
    id: 4,
    title: "A importância da Manutenção Preditiva e do Monitoramento Contínuo em infraestruturas",
    image: "https://images.unsplash.com/photo-1485310818226-f01c4269687f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "manutencao-preditiva-monitoramento",
    content: "Manutenção preditiva é uma estratégia que consiste em realizar intervenções programadas com base na condição real de uma estrutura, evitando falhas antes que elas ocorram. Na Safena, utilizamos sensores e sistemas de monitoramento contínuo para identificar alterações no desempenho estrutural ao longo do tempo, o que viabiliza essas intervenções de forma mais precisa e eficaz. Diferente da manutenção preventiva, ela atua somente quando necessário, com base em evidências concretas de desgaste ou anomalias, reduzindo custos com manutenções corretivas e aumentando a segurança da infraestrutura."
  },
];