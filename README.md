# Site pessoal — Rogério Almeida

Página estática da festa de 1 aninho do Rogério (Pequeno Príncipe Aviador),
publicada em www.rogerioalmeida.com. Todo o conteúdo (estilos, scripts e
imagens) está embutido em `public/index.html`.

## Executar localmente

Qualquer servidor HTTP estático pode servir os arquivos. Exemplo:

```sh
python -m http.server 8080
```

Abra `http://localhost:8080`.

## Publicar no Easypanel

O repositório inclui um `Dockerfile` baseado em Nginx. No Easypanel, crie um
serviço do tipo App conectado ao repositório GitHub e selecione Dockerfile
como método de build. A aplicação escuta internamente na porta `80`.

## Publicar na Cloudflare

O `wrangler.jsonc` publica a pasta `public/` como o Worker `rogerioalmeida-site`.
No painel da Cloudflare, em Workers & Pages → Create → Import a repository,
conecte este repositório; o comando de deploy padrão (`npx wrangler deploy`)
já funciona sem build.
