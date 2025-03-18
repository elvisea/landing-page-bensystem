import {
  Shield, // Sistemas de Alarme
  Camera, // Câmeras de Segurança
  Lock, // Controle de Acesso
  Home, // Automação Residencial
  Building2, // Segurança Empresarial
  Smartphone, // Monitoramento Remoto
  Eye, // Vigilância
} from 'lucide-react'

import {
  BsTrophy,
  BsPersonCheck,
  BsCalendarCheck,
  BsBuilding,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsShieldCheck,
  BsLightningCharge,
} from 'react-icons/bs'

import { IconType } from 'react-icons'

interface ServiceItem {
  title: string
  description: string
  Icon: IconType
}

interface TeamMember {
  name: string
  role: string
  certification: string
  image: string
  description: string
  specialties: string[]
}

interface StatItem {
  value: string
  label: string
  Icon: IconType
}

interface ReviewItem {
  name: string
  rating: number
  text: string
  date: string
}

interface FAQItem {
  question: string
  answer: string
}

interface Step {
  title: string;
  description: string;
  features?: string[];
}

export const content = {
  hero: {
    title: "Soluções em Segurança Eletrônica",
    subtitle: "Protegendo seu patrimônio com tecnologia avançada e monitoramento 24h. Mais de 15 anos de experiência em segurança residencial e empresarial.",
    buttonText: "Solicite um Orçamento Gratuito"
  },

  services: {
    title: "Nossos Serviços",
    subtitle: "Soluções completas em segurança eletrônica para sua casa ou empresa",
    items: [
      {
        title: "Sistemas de Alarme",
        description: "Instalação de sistemas de alarme com sensores de movimento, abertura e quebra de vidro, com comunicação via internet e monitoramento 24h.",
        Icon: Shield
      },
      {
        title: "Câmeras de Segurança",
        description: "Instalação de câmeras de alta definição, com visão noturna, detecção de movimento e acesso remoto via aplicativo.",
        Icon: Camera
      },
      {
        title: "Controle de Acesso",
        description: "Sistemas de controle de acesso com biometria, cartão, senha ou reconhecimento facial para residências e empresas.",
        Icon: Lock
      },
      {
        title: "Automação Residencial",
        description: "Integração de sistemas de segurança com automação residencial, permitindo controle de iluminação, portões e outros dispositivos.",
        Icon: Home
      },
      {
        title: "Segurança Empresarial",
        description: "Soluções completas para empresas, incluindo CFTV, alarmes, controle de acesso e sistemas anti-incêndio.",
        Icon: Building2
      },
      {
        title: "Monitoramento 24h",
        description: "Serviço de monitoramento 24 horas, com central própria e equipe treinada para resposta rápida a ocorrências.",
        Icon: Smartphone
      }
    ] as ServiceItem[]
  },

  reviews: {
    title: "O que Nossos Clientes Dizem",
    subtitle: "A satisfação de nossos clientes é nossa maior prioridade",
    buttonText: "Ver Mais Depoimentos",
    items: [
      {
        name: "Carlos R. Silva",
        rating: 5,
        text: "Excelente serviço de instalação de câmeras. Profissionais pontuais e sistema funcionando perfeitamente. Recomendo!",
        date: "2024-02-15"
      },
      {
        name: "Marcos A. Pereira",
        rating: 5,
        text: "Contratei o sistema de alarme com monitoramento e estou muito satisfeito. O aplicativo é fácil de usar e o suporte é rápido.",
        date: "2024-02-10"
      },
      {
        name: "Juliana L. Martins",
        rating: 5,
        text: "Instalaram o sistema de controle de acesso na minha empresa. Funcionários treinados e sistema confiável. Ótimo custo-benefício.",
        date: "2024-02-05"
      },
      {
        name: "Roberto A. Braga",
        rating: 4,
        text: "A automação residencial integrada com o sistema de segurança superou minhas expectativas. Agora controlo tudo pelo celular.",
        date: "2024-01-30"
      },
      {
        name: "Tatiana M. Santos",
        rating: 5,
        text: "O monitoramento 24h já evitou uma tentativa de invasão na minha loja. A equipe de pronto atendimento chegou em minutos.",
        date: "2024-01-25"
      }
    ] as ReviewItem[]
  },

  contact: {
    title: "Fale com um Especialista",
    subtitle: "Solicite um orçamento gratuito e conheça nossas soluções",
    form: {
      nameLabel: "Nome Completo",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      addressLabel: "Endereço",
      messageLabel: "Descreva sua Necessidade",
      buttonText: "Solicitar Orçamento"
    }
  },

  footer: {
    about: {
      title: "Sobre a Bensystem",
      description: "Com mais de 15 anos de atuação, a Bensystem é referência em soluções de segurança eletrônica. Utilizamos equipamentos de última geração e contamos com profissionais altamente qualificados para garantir a proteção do seu patrimônio."
    },
    contact: {
      title: "Contato",
      email: "contato@bensystem.com.br",
      phone: "(41) 3333-3333",
      address: "Rua Marechal Deodoro, 500 - Centro, Curitiba",
      certification: "CREA-PR 123456"
    },
    social: {
      title: "Redes Sociais",
      items: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/bensystem",
          Icon: BsLinkedin
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/bensystem",
          Icon: BsFacebook
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/bensystem",
          Icon: BsInstagram
        }
      ] as { name: string; url: string; Icon: IconType }[]
    },
    copyright: "Bensystem Segurança Eletrônica. Todos os direitos reservados."
  },

  header: {
    logo: "Bensystem",
    menu: {
      services: "Serviços",
      howItWorks: "Como Funciona",
      reviews: "Depoimentos",
      stats: "Resultados",
      contact: "Contato"
    }
  },

  team: {
    title: "Nossa Equipe",
    subtitle: "Conheça os profissionais dedicados a garantir sua segurança",
    members: [
      {
        name: "Ricardo Silva",
        role: "Diretor Técnico",
        certification: "CREA-PR 123456",
        image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40",
        description: "Engenheiro eletricista com mais de 20 anos de experiência em sistemas de segurança eletrônica. Especialista em projetos de grande porte.",
        specialties: [
          "Projetos de CFTV",
          "Sistemas Integrados",
          "Segurança Corporativa"
        ]
      },
      {
        name: "Maria Santos",
        role: "Gerente de Operações",
        certification: "CFT 234567",
        image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8",
        description: "Especialista em gestão de equipes de instalação e monitoramento. Responsável pela qualidade dos serviços prestados.",
        specialties: [
          "Gestão de Equipes",
          "Controle de Qualidade",
          "Atendimento ao Cliente"
        ]
      },
      {
        name: "João Costa",
        role: "Técnico Sênior",
        certification: "CFT 345678",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
        description: "Técnico especializado em instalação e manutenção de sistemas de segurança eletrônica. Certificado pelas principais marcas do mercado.",
        specialties: [
          "Instalação de Alarmes",
          "Configuração de CFTV",
          "Automação Residencial"
        ]
      }
    ] as TeamMember[]
  },

  stats: {
    title: "Nossos Números",
    subtitle: "Resultados que demonstram nossa experiência e comprometimento",
    items: [
      {
        value: "+1500",
        label: "Instalações Realizadas",
        Icon: BsTrophy
      },
      {
        value: "+800",
        label: "Clientes Ativos",
        Icon: BsPersonCheck
      },
      {
        value: "15",
        label: "Anos de Experiência",
        Icon: BsCalendarCheck
      },
      {
        value: "3",
        label: "Unidades no Paraná",
        Icon: BsBuilding
      }
    ] as StatItem[]
  },

  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tire suas principais dúvidas sobre nossos serviços",
    items: [
      {
        question: "Quanto tempo leva para instalar um sistema de segurança?",
        answer: "O tempo de instalação varia conforme a complexidade do projeto. Sistemas residenciais simples podem ser instalados em um dia, enquanto projetos empresariais mais complexos podem levar alguns dias. Durante a visita técnica, forneceremos um cronograma detalhado."
      },
      {
        question: "Como funciona o monitoramento 24h?",
        answer: "Nosso sistema de monitoramento 24h recebe os sinais dos equipamentos instalados em tempo real. Em caso de disparo, nossa central entra em contato imediatamente com o cliente e, se necessário, aciona as autoridades competentes. Tudo isso é gerenciado por uma equipe treinada que trabalha em turnos para garantir proteção ininterrupta."
      },
      {
        question: "Quais são as formas de pagamento?",
        answer: "Oferecemos diversas formas de pagamento, incluindo à vista com desconto, parcelamento em até 12x no cartão de crédito, boleto bancário e PIX. Para contratos de monitoramento, trabalhamos com mensalidades acessíveis que podem ser pagas por débito automático."
      },
      {
        question: "Vocês atendem em outras cidades?",
        answer: "Sim, além da sede em Curitiba, atendemos em toda a região metropolitana e principais cidades do Paraná. Para localidades mais distantes, fazemos uma análise de viabilidade e podemos atender mediante condições específicas."
      },
      {
        question: "Os equipamentos têm garantia?",
        answer: "Sim, todos os equipamentos possuem garantia do fabricante (geralmente de 1 ano) e oferecemos garantia adicional de 6 meses para o serviço de instalação. Também disponibilizamos planos de manutenção preventiva para prolongar a vida útil dos sistemas."
      },
      {
        question: "É possível acessar as câmeras pelo celular?",
        answer: "Sim, todos os nossos sistemas de câmeras são configurados para acesso remoto via aplicativo móvel. Você pode monitorar sua casa ou empresa de qualquer lugar, a qualquer momento, desde que tenha conexão com a internet."
      },
      {
        question: "O que acontece em caso de falta de energia?",
        answer: "Nossos sistemas são equipados com baterias de backup que mantêm o funcionamento durante quedas de energia. Para clientes com necessidades específicas, oferecemos soluções de nobreak e geradores para garantir o funcionamento contínuo dos equipamentos."
      }
    ] as FAQItem[]
  },

  features: {
    title: "Por que escolher nossa empresa?",
    subtitle: "Diferenciais que nos tornam referência em segurança eletrônica",
    items: [
      {
        title: "Tecnologia de Ponta",
        description: "Utilizamos equipamentos das melhores marcas do mercado, com tecnologia avançada e alta durabilidade.",
        Icon: BsLightningCharge
      },
      {
        title: "Equipe Certificada",
        description: "Nossos técnicos são certificados e passam por treinamentos constantes para garantir instalações perfeitas.",
        Icon: BsPersonCheck
      },
      {
        title: "Monitoramento 24h",
        description: "Central de monitoramento própria, operando 24 horas por dia, 7 dias por semana, incluindo feriados.",
        Icon: Eye
      },
      {
        title: "Garantia Estendida",
        description: "Oferecemos garantia em todos os serviços e equipamentos, além de manutenção preventiva e corretiva.",
        Icon: BsShieldCheck
      }
    ]
  },

  howItWorks: {
    title: "Como Funciona",
    subtitle: "Conheça o processo completo, desde o primeiro contato até a instalação e monitoramento",
    steps: [
      {
        title: "Avaliação Inicial",
        description: "Realizamos uma análise detalhada das suas necessidades de segurança, considerando o tipo de imóvel, pontos vulneráveis e requisitos específicos.",
        features: [
          "Visita técnica gratuita",
          "Análise de vulnerabilidades",
          "Identificação de pontos estratégicos",
          "Orçamento personalizado sem compromisso"
        ]
      },
      {
        title: "Projeto Personalizado",
        description: "Desenvolvemos um projeto sob medida, selecionando os equipamentos e tecnologias mais adequados para sua necessidade.",
        features: [
          "Seleção de equipamentos de alta qualidade",
          "Posicionamento estratégico de câmeras e sensores",
          "Integração com sistemas existentes quando possível",
          "Planejamento de instalação com mínima interferência"
        ]
      },
      {
        title: "Instalação Profissional",
        description: "Nossa equipe técnica realiza a instalação com o máximo de cuidado e eficiência, garantindo o funcionamento perfeito do sistema.",
        features: [
          "Técnicos certificados e uniformizados",
          "Instalação limpa com organização de cabos",
          "Testes completos de funcionamento",
          "Treinamento básico de operação"
        ]
      },
      {
        title: "Configuração e Ativação",
        description: "Configuramos todos os equipamentos, incluindo acesso remoto, notificações e integrações com outros sistemas.",
        features: [
          "Configuração de aplicativos para acesso remoto",
          "Programação de alertas e notificações",
          "Integração com central de monitoramento",
          "Testes finais de funcionamento"
        ]
      },
      {
        title: "Monitoramento e Suporte",
        description: "Oferecemos monitoramento 24h e suporte técnico contínuo para garantir que seu sistema funcione perfeitamente.",
        features: [
          "Central de monitoramento 24h/7 dias",
          "Atendimento de emergência",
          "Manutenção preventiva programada",
          "Suporte técnico por telefone e WhatsApp"
        ]
      }
    ] as Step[]
  }
} 