# Bensystem - Landing Page

Este projeto é uma landing page moderna para a Bensystem, empresa especializada em sistemas de segurança eletrônica, alarmes e câmeras de monitoramento.

![Bensystem Preview](/public/og-image.png)

## Sobre o Projeto

A landing page da Bensystem foi desenvolvida com Next.js 15 e Tailwind CSS, oferecendo uma experiência de usuário moderna e responsiva. O site apresenta os serviços de segurança eletrônica, processo de instalação, depoimentos de clientes e formulário de contato.

### Principais Recursos

- **Design Responsivo**: Experiência otimizada em dispositivos móveis, tablets e desktops
- **Componentes Interativos**: Navegação suave e elementos interativos para melhor engajamento
- **Formulário de Contato**: Integração com sistema de envio de e-mails para captura de leads
- **SEO Otimizado**: Estrutura semântica, metadados e Schema.org para melhor indexação em motores de busca
- **Performance Otimizada**: Carregamento rápido com imagens otimizadas e código eficiente

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React com renderização híbrida
- [React 19](https://react.dev/) - Biblioteca JavaScript para interfaces de usuário
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Lucide React](https://lucide.dev/) - Ícones SVG minimalistas
- [Radix UI](https://www.radix-ui.com/) - Componentes de UI acessíveis e sem estilo
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript

## Começando

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/sua-empresa/landing-page-bensystem.git
   cd landing-page-bensystem
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
landing-page-bensystem/
├── public/             # Arquivos estáticos
├── src/
│   ├── app/            # Rotas e componentes de página
│   │   ├── components/ # Componentes da UI
│   │   ├── content/    # Conteúdo da página
│   │   └── page.tsx    # Página principal
│   ├── components/     # Componentes compartilhados
│   └── lib/            # Utilitários e funções auxiliares
├── package.json        # Dependências e scripts
└── tailwind.config.js  # Configuração do Tailwind CSS
```

## Personalização

O conteúdo do site pode ser facilmente editado no arquivo `src/app/content/page-content.ts`. Este arquivo contém todos os textos, links e configurações de componentes.

### Seções da Página

- **Hero**: Banner principal com chamada para ação
- **Serviços**: Lista de serviços oferecidos pela Bensystem
- **Como Funciona**: Processo passo a passo de instalação e monitoramento
- **Depoimentos**: Avaliações de clientes satisfeitos
- **FAQ**: Perguntas frequentes sobre os serviços
- **Contato**: Formulário para solicitação de orçamento

## SEO e Performance

O projeto inclui:
- Metadados otimizados para SEO
- Schema.org para dados estruturados
- Sitemap.xml para indexação
- Robots.txt configurado
- Otimização de imagens e assets

## Implantação

A maneira mais fácil de implantar este site é usar a [Plataforma Vercel](https://vercel.com/new), dos criadores do Next.js.

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

## Configuração

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para informações de contato e redes sociais. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
# Informações de Contato
NEXT_PUBLIC_COMPANY_EMAIL=contato@bensystem.com.br
NEXT_PUBLIC_COMPANY_PHONE=(41) 3333-3333
NEXT_PUBLIC_COMPANY_ADDRESS=Rua Marechal Deodoro, 500 - Centro, Curitiba
NEXT_PUBLIC_COMPANY_WHATSAPP=5541997799375

# Redes Sociais
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/bensystem
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/bensystem
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/bensystem
```

Estas variáveis podem ser modificadas sem alterar o código-fonte.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Bensystem - [contato@bensystem.com.br](mailto:contato@bensystem.com.br)

---

Desenvolvido com ❤️ para a Bensystem
