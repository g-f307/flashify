
# 📚 StudyLens (Next.js Migrated)

Aplicação **StudyLens** migrada para **Next.js 14** com suporte a **TypeScript**, **shadcn/ui**, sistema de **toast notifications** e estrutura modular.  
O projeto foi pensado para ser escalável, moderno e pronto para produção.

---

## 📌 FUNCIONALIDADES

- Interface responsiva com **Next.js 14 + React 18**.
- Componentes estilizados com **shadcn/ui** (baseados em Radix + TailwindCSS).
- Sistema de **toasts dinâmicos** via hook customizado `use-toast`.
- Estrutura de **Providers** centralizados para React Query, Tooltip e Toasts.
- Configuração de **TailwindCSS** otimizada para o App Router do Next.js.
- Arquitetura escalável com separação de `components`, `hooks` e `lib`.

---

## 🧠 VISÃO GERAL TÉCNICA

### Fluxo de Funcionamento

1. **Entrada do Usuário**: Acessa a interface web.
2. **Renderização**: O Next.js renderiza páginas pelo App Router (`/app`).
3. **Camada de UI**:
   - `shadcn/ui` fornece botões, tooltips, toasts e outros componentes prontos.
   - `tailwind-merge` e `clsx` garantem composição de classes.
4. **Gerenciamento de Estado**:
   - `@tanstack/react-query` lida com estados assíncronos.
   - Hooks customizados (`use-toast`) controlam notificações.
5. **Feedback Visual**: Toasters e tooltips providos em `Providers.tsx`.

---

## 📁 ESTRUTURA DO CÓDIGO

| Diretório / Arquivo   | Função Principal | Descrição |
|------------------------|------------------|-----------|
| `src/app/`            | Rotas e layout   | Contém `page.tsx`, `layout.tsx`, `not-found.tsx` |
| `src/app/Providers.tsx` | Providers globais | Configura React Query, Tooltip, Toasters |
| `src/components/`     | Componentes UI   | Baseados no shadcn/ui (botões, inputs, tooltips etc.) |
| `src/hooks/use-toast.ts` | Hook customizado | Gerencia notificações (toasts) |
| `src/lib/utils.ts`    | Utilitários      | Função `cn()` para merge de classes |
| `public/`             | Assets estáticos | Imagens e arquivos públicos |

---

## 📦 COMO EXECUTAR LOCALMENTE

### Pré-requisitos

- Node.js 18 ou superior
- Git

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/studylens-nextjs-migrated.git
cd studylens-nextjs-migrated
```

### 2. Instalar Dependências

```bash
npm install --legacy-peer-deps
```

> O parâmetro `--legacy-peer-deps` garante compatibilidade com ESLint 8.x.

### 3. Rodar o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🛠 SCRIPTS DISPONÍVEIS

- `npm run dev` → inicia em ambiente de desenvolvimento.
- `npm run build` → cria a versão otimizada para produção.
- `npm run start` → roda a build de produção.
- `npm run lint` → verifica problemas de linting no código.

---

## 🔔 SISTEMA DE TOAST

Exemplo de uso em qualquer componente:

```tsx
import { useToast } from "@/hooks/use-toast"

export default function Example() {
  const { toast } = useToast()

  return (
    <button
      onClick={() =>
        toast({
          title: "Sucesso!",
          description: "Sua ação foi concluída.",
        })
      }
    >
      Mostrar Toast
    </button>
  )
}
```

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

- [x] Estrutura inicial migrada para Next.js 14  
- [x] Configuração do **TailwindCSS**  
- [x] Criação de `src/lib/utils.ts`  
- [x] Implementação de `src/hooks/use-toast.ts`  
- [x] Integração com shadcn/ui e Radix UI  
- [ ] Ajustar páginas e rotas específicas da aplicação final  
- [ ] Adicionar testes unitários (Jest/RTL)  
- [ ] Configurar deploy na Vercel  

---

## 📌 PRÓXIMOS PASSOS

- Documentar componentes existentes (`/components/ui`)  
- Criar rotas dinâmicas no Next.js (`/app`)  
- Configurar deploy (Vercel recomendado)  

---

