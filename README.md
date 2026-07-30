# Site pessoal — Rogério Almeida

Site institucional estático de Rogério Almeida, Professor de Direito e
Servidor Público.

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
