// Configurações globais e dados da Landing Page
import { decodeProtectedData } from '../utils/obfuscation';

// Proteção LGPD / Scrapers: token criptografado para evitar exposição pública no GitHub
const resolvedWhatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || decodeProtectedData("Y1xFRVZBUFViQ0NRXQ==");
const resolvedWhatsappUrl = import.meta.env.VITE_WHATSAPP_URL || `https://wa.me/${resolvedWhatsappNumber}?text=Ol%C3%A1%2C+Vittoria%21+Vim+pelo+seu+site+e+gostaria+de+tirar+d%C3%BAvidas.`;

export const siteConfig = {
  name: "Vittoria's Studio",
  artistName: "Vittoria Amorim",
  subtitle: "Lash Designer & Especialista em Realce do Olhar",
  tagline: "Cílios e sobrancelhas saudáveis, duradouros e feitos sob medida.",
  bio: "Especialista em visagismo ocular, biossegurança rigorosa e retenção prolongada. Mais de 1.200 atendimentos realizados com foco na saúde dos fios naturais.",
  
  // Imagens principais de exibição
  bannerImage: "/studio-banner.jpg",
  avatarImage: "/vittoria-profile.jpg",
  heroImage: "/vittoria-hero.jpg",

  // Links de Ação (protegidos contra rastreadores e configuráveis por ambiente)
  bookingUrl: import.meta.env.VITE_BOOKING_URL || "https://online.maapp.com.br/ilopesstudio",
  whatsappNumber: resolvedWhatsappNumber,
  whatsappUrl: resolvedWhatsappUrl,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/vittorias.studio/",
  instagramHandle: import.meta.env.VITE_INSTAGRAM_HANDLE || "@vittorias.studio",



  
  // Localização
  location: {
    title: "Vittoria's Studio • Santo André",
    address: "Rua General Glicério, 926",
    complement: "7º Andar • Sala 71",
    neighborhood: "Centro",
    city: "Santo André - SP",
    cep: "09015-191",
    reference: "Próximo à estação Santo André e ao Shopping Grand Plaza",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+General+Glicerio+926+Centro+Santo+Andre+SP",
    wazeUrl: "https://waze.com/ul?q=Rua%20General%20Glicerio%20926%20Santo%20Andre",
    hours: "Segunda a Sábado: 09h às 19h30 (Com agendamento prévio)",
    payments: "Dinheiro, PIX e Cartão",
  },

  // Frase da animação do Scroll
  manifesto: {
    badge: "EXPERIÊNCIA EXCLUSIVA",
    text: "Pronta pra conquistar a todos com seu novo olhar? Mais do que cílios, uma experiência única de realce, autoestima e elegância feita sob medida para você."
  },

  // Serviços e Técnicas (Os 4 primeiros aparecem no carrossel de destaque)
  // Serviços e Técnicas
  services: [
    {
      id: "volume-brasileiro",
      title: "Volume Brasileiro",
      category: "cilios",
      price: "R$ 150,00",
      tagline: "O queridinho: densidade, leveza e retenção incrível",
      description: "Utiliza fios tecnológicos em formato de Y que proporcionam um efeito volumoso sem pesar nos fios naturais. Preenchimento equilibrado e marcante.",
      duration: "2h",
      retention: "Manutenção em 18 a 25 dias",
      badge: "Mais Pedido",
      popular: true,
      image: "/services/volume-brasileiro.jpg"
    },
    {
      id: "mega-brasileiro",
      title: "Mega Brasileiro",
      category: "cilios",
      price: "R$ 195,00",
      tagline: "Densidade máxima com a leveza dos fios tecnológicos",
      description: "Versão mais densa e marcante do clássico volume brasileiro, com preenchimento completo e acabamento escuro e impactante.",
      duration: "2h",
      retention: "Manutenção em 20 a 28 dias",
      badge: "Super Volume",
      popular: true,
      image: "/services/mega-brasileiro.jpg"
    },
    {
      id: "volume-egipcio",
      title: "Volume Egípcio",
      category: "cilios",
      price: "R$ 150,00",
      tagline: "Fios em W para uma trama densa e textura aveludada",
      description: "Aplicação com fios tecnológicos em W (tridentes). Cria um olhar expressivo, simétrico e com volume marcante na medida certa.",
      duration: "2h",
      retention: "Manutenção em 18 a 25 dias",
      badge: "Tendência",
      popular: false,
      image: "/services/volume-egipcio.jpg"
    },
    {
      id: "volume-glamour",
      title: "Volume Glamour",
      category: "cilios",
      price: "R$ 155,00",
      tagline: "Curvatura impecável, volume e olhar destacado",
      description: "Técnica com mapping sofisticado que realça a linha dos olhos com densidade média-alta e um acabamento elegante e uniforme.",
      duration: "2h",
      retention: "Manutenção em 20 a 25 dias",
      badge: "Elegância",
      popular: false,
      image: "/services/volume-glamour.jpg"
    },
    {
      id: "mega-glamour",
      title: "Mega Glamour",
      category: "cilios",
      price: "R$ 195,00",
      tagline: "Máximo impacto visual, densidade e sofisticação",
      description: "Para quem ama um olhar super marcante e volumoso. Fans densos que cobrem 100% dos fios com acabamento aveludado e preto profundo.",
      duration: "2h",
      retention: "Manutenção em 20 a 28 dias",
      badge: "Glamour Total",
      popular: true,
      image: "/services/mega-glamour.jpg"
    },
    {
      id: "fox-eyes",
      title: "Fox Eyes",
      category: "cilios",
      price: "R$ 165,00",
      tagline: "Efeito delineado e olhar alongado sensual",
      description: "Mapping estilizado com transição suave que alonga visualmente os cantos externos, criando um lifting marcante no olhar estilo delineado.",
      duration: "2h",
      retention: "Manutenção em 18 a 22 dias",
      badge: "Efeito Lifting",
      popular: true,
      image: "/services/fox-eyes.jpg"
    },
    {
      id: "mega-fox",
      title: "Mega Fox",
      category: "cilios",
      price: "R$ 195,00",
      tagline: "O olhar felino mais marcante e preenchido",
      description: "Combina a técnica do Fox Eyes com alta densidade, proporcionando um olhar puxado ultra evidente e preenchimento intenso.",
      duration: "2h",
      retention: "Manutenção em 20 a 25 dias",
      badge: "Exclusivo",
      popular: false,
      image: "/services/mega-fox.jpg"
    },
    {
      id: "efeito-sirena",
      title: "Efeito Sirena",
      category: "cilios",
      price: "R$ 135,00",
      tagline: "Curvatura suave e visual sereia delicado e envolvente",
      description: "Design fluído que acompanha a curvatura natural com fios graduados e acabamento sutilmente despontado, remetendo ao charme do olhar de sereia.",
      duration: "1h 30min",
      retention: "Manutenção em 18 a 21 dias",
      badge: "Delicado",
      popular: false,
      image: "/services/efeito-sirena.jpg"
    },
    {
      id: "volume-angel",
      title: "Volume Angel",
      category: "cilios",
      price: "R$ 170,00",
      tagline: "Leveza angelical, pontas iluminadas e textura suave",
      description: "Técnica inspirada nas asas de anjo, com fios ultra finos que criam um degradê aéreo, leve e cheio de movimento natural.",
      duration: "2h",
      retention: "Manutenção em 18 a 25 dias",
      badge: "Inovador",
      popular: false,
      image: "/services/volume-angel.jpg"
    },
    {
      id: "fio-a-fio",
      title: "Fio a Fio Clássico",
      category: "cilios",
      price: "R$ 140,00",
      tagline: "Naturalidade, sofisticação e efeito rímel impecável",
      description: "Aplicação de um fio sintético ultraleve sobre cada fio natural. Perfeito para quem busca elegância discreta e praticidade no dia a dia.",
      duration: "2h",
      retention: "Manutenção em 15 a 21 dias",
      badge: "Mais Natural",
      popular: false,
      image: "/services/fio-a-fio.jpg"
    },
    {
      id: "volume-wispy",
      title: "Volume Wispy",
      category: "cilios",
      price: "R$ 165,00",
      tagline: "Efeito desestruturado 'Kim K' com textura e movimento",
      description: "Mapeamento texturizado que mescla fios volumosos com pontas despontadas (spikes) em camadas. Cria um visual moderno, leve e com efeito 'Kim Kardashian'.",
      duration: "2h",
      retention: "Manutenção em 18 a 22 dias",
      badge: "Efeito Kim K",
      popular: true,
      image: "/services/volume-wispy.jpg"
    },
    {
      id: "volume-shine",
      title: "Volume Shine",
      category: "cilios",
      price: "R$ 160,00",
      tagline: "Brilho acetinado, curvatura marcante e acabamento radiante",
      description: "Técnica com fios de acabamento gloss/acetinado que refletem a luz sutilmente, proporcionando um olhar iluminado, sofisticado e marcante.",
      duration: "2h",
      retention: "Manutenção em 18 a 25 dias",
      badge: "Brilho Radiante",
      popular: false,
      image: "/services/volume-shine.jpg"
    },
    {
      id: "remocao",
      title: "Remoção de Extensão",
      category: "cuidados",
      price: "R$ 40,00",
      tagline: "Remoção química suave sem danificar os fios naturais",
      description: "Uso de removedor em gel profissional com ação suave que dissolve o adesivo com total segurança, preservando a saúde dos cílios naturais.",
      duration: "30min",
      retention: "Procedimento seguro",
      badge: "Saúde Ocular",
      popular: false,
      image: "/services/remocao.jpg"
    },
    {
      id: "brow-lamination",
      title: "Brow Lamination",
      category: "sobrancelhas",
      price: "R$ 100,00",
      tagline: "Alinhamento, volume e fios disciplinados com aspecto encorpado",
      description: "Procedimento químico seguro que alinha e direciona os fios naturais da sobrancelha, proporcionando volume, simetria e efeito lifting moderno.",
      duration: "1h",
      retention: "Duração de 4 a 6 semanas",
      badge: "Destaque Sobrancelhas",
      popular: true,
      image: "/services/brow-lamination.jpg"
    },
    {
      id: "design-henna",
      title: "Design com Henna",
      category: "sobrancelhas",
      price: "R$ 50,00",
      tagline: "Definição, preenchimento de falhas e cor personalizada",
      description: "Mapeamento visagista com aplicação de henna premium de alta fixação. Ideal para quem deseja sobrancelhas mais marcadas, desenhadas e sem falhas.",
      duration: "45min",
      retention: "Durabilidade de 7 a 15 dias na pele",
      badge: "Mais Pedido Sobrancelhas",
      popular: true,
      image: "/services/design-com-henna.jpg"
    },
    {
      id: "design-personalizado",
      title: "Design Personalizado",
      category: "sobrancelhas",
      price: "R$ 45,00",
      tagline: "Visagismo facial sob medida para valorizar sua expressão",
      description: "Mapeamento geométrico baseado na estrutura óssea e formato do rosto, com epilação precisa para realçar a harmonia do seu olhar.",
      duration: "30min",
      retention: "Manutenção em 15 a 20 dias",
      badge: "Essencial",
      popular: false,
      image: "/services/design-personalizado.jpg"
    }
  ],

  // Diferenciais do atendimento
  differentials: [
    {
      title: "Biossegurança Rígida",
      description: "Pinças esterilizadas, materiais descartáveis por atendimento e protocolos rigorosos de higiene ocular.",
      icon: "ShieldCheck"
    },
    {
      title: "Lash Mapping Personalizado",
      description: "Estudo visagista do formato dos seus olhos (Fox Eyes, Doll Eyes, Esquilo) para valorizar sua beleza única.",
      icon: "Sparkles"
    },
    {
      title: "Adesivos & Fios Certificados",
      description: "Utilização exclusiva de produtos hipoalergênicos testados e aprovados pela ANVISA, prevenindo irritações.",
      icon: "HeartHandshake"
    },
    {
      title: "Isolamento Milimétrico",
      description: "Técnica apurada que garante a preservação do ciclo de crescimento natural dos seus cílios, sem quedas precoces.",
      icon: "Eye"
    },
    {
      title: "Ambiente Acolhedor",
      description: "Maca ergonômica acolchoada, manta macia, temperatura agradável e playlist relaxante para o seu momento.",
      icon: "Coffee"
    },
    {
      title: "Kit Pós-Procedimento",
      description: "Orientações completas de cuidados e escovinha especial para manter seu alinhamento impecável até a manutenção.",
      icon: "Gift"
    }
  ],

  // Depoimentos
  testimonials: [
    {
      name: "Mariana S.",
      text: "Fiz o Volume Brasileiro e simplesmente me apaixonei! Já tem 20 dias e a retenção está perfeita. O atendimento no Vittoria's Studio é impecável, super atenciosa e delicada.",
      tag: "Cliente assídua",
      stars: 5,
      technique: "Volume Brasileiro"
    },
    {
      name: "Camila R.",
      text: "Eu tinha muito medo de estragar meus cílios naturais por experiências ruins no passado. A Vitória explicou todo o processo, fez um mapping perfeito e meus cílios continuam super saudáveis!",
      tag: "1ª vez no estúdio",
      stars: 5,
      technique: "Fio a Fio Clássico"
    },
    {
      name: "Beatriz L.",
      text: "Ambiente maravilhoso em Santo André, fácil de chegar e maca super confortável (eu até dormi durante a aplicação rs). Cílios lindos e zero incômodo nos olhos!",
      tag: "Cliente mensal",
      stars: 5,
      technique: "Volume Russo"
    },
    {
      name: "Juliana M.",
      text: "O Fox Eyes e o Design com Henna superaram todas as minhas expectativas! Meu olhar ficou marcante, elegante e com um acabamento perfeito. A durabilidade e o cuidado da Vitória são impecáveis.",
      tag: "Cliente assídua",
      stars: 5,
      technique: "Fox Eyes & Henna"
    }
  ],

  // FAQ
  faq: [
    {
      question: "O procedimento de extensão de cílios dói?",
      answer: "Não! O procedimento é 100% indolor, relaxante e confortável. Muitas clientes aproveitam o momento para tirar uma soneca. A aplicação é feita com os olhos fechados sobre os fios naturais, sem tocar na pele da pálpebra."
    },
    {
      question: "Quanto tempo dura e com que frequência devo fazer a manutenção?",
      answer: "A extensão dura enquanto o seu ciclo natural de troca dos cílios ocorrer (que varia entre 4 a 6 semanas). Para manter o preenchimento sempre denso e bonito, recomendamos a manutenção entre 15 e 21 dias."
    },
    {
      question: "Extensão de cílios estraga ou faz cair os cílios naturais?",
      answer: "Mito! Quando aplicada por uma profissional habilitada, com isolamento correto de 1 a 1 e peso adequado para a saúde do fio natural, seus cílios continuam nascendo e se renovando normalmente."
    },
    {
      question: "Posso molhar, lavar o rosto e praticar exercícios?",
      answer: "Com certeza! Os adesivos de alta tecnologia atuais permitem molhar os cílios após o período de secagem inicial. A higienização diária com shampoo neutro infantil ou espuma específica é fundamental para a saúde e retenção."
    },
    {
      question: "Posso usar rímel (máscara de cílios)?",
      answer: "Não recomendamos o uso de rímel nas extensões, pois sua remoção pode arrancar os fios e diminuir a retenção. Com as extensões você já acorda pronta com efeito maquiado todos os dias!"
    },
    {
      question: "Como funciona o agendamento?",
      answer: "Basta clicar em qualquer botão de 'Agendar Horário' na página. Você será direcionada diretamente para o nosso sistema/link oficial de agendamentos, onde pode escolher o dia e horário que melhor se encaixam na sua rotina."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Dinheiro, PIX e Cartão (débito e crédito)."
    }
  ]
};
