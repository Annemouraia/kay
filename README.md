# KAY

Catálogo de roupas da KAY: o cliente escolhe a peça, ela fica reservada para os outros e a dona recebe o aviso no Telegram. Pagamento por Pix (QR code e copia e cola) ou dinheiro.

É um **app instalável (PWA)**: abre pelo navegador e pode ser adicionado à tela inicial do celular.

## Como publicar (GitHub Pages)

1. Crie um repositório no GitHub (por exemplo `kay`) e envie todos os arquivos desta pasta.
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em cerca de 1 minuto o site fica em `https://SEU-USUARIO.github.io/kay/`.

## Como instalar no celular

- **Android (Chrome):** menu ⋮ > **Instalar app** (ou **Adicionar à tela inicial**).
- **iPhone (Safari):** botão de compartilhar > **Adicionar à Tela de Início**.

## Banco de dados

No topo do `index.html`, preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY` com os valores do projeto Supabase da KAY. Enquanto estiverem vazios, o site roda em modo demonstração (dados salvos só no aparelho).

A `SUPABASE_ANON_KEY` é pública por natureza e pode ficar no repositório. **Nunca** coloque neste repositório a chave `service_role`, o token do bot do Telegram ou senhas.

## Arquivos

- `index.html`: catálogo, reservas e painel da loja (`#admin`)
- `manifest.webmanifest`, `sw.js` e os `.png`: parte de app instalável
