# AgroDigital — Painel Universal de Leituras

Painel estático em HTML, CSS e JavaScript para importar, filtrar e analisar arquivos operacionais em CSV ou JSON diretamente no navegador.

## Funcionalidades

- importação local de CSV e JSON;
- identificação automática de colunas numéricas e categóricas;
- KPIs de registros, soma e média;
- agrupamento e gráfico dinâmico com Chart.js;
- busca global nos dados;
- tabela tratada e exportação do resultado filtrado;
- layout responsivo para computador, tablet e celular;
- deploy automático no GitHub Pages após merge na branch `main`.

## Uso local

Abra `index.html` no navegador ou execute um servidor estático:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicação

O workflow `.github/workflows/deploy-pages.yml` publica o conteúdo quando houver push na branch `main`. No GitHub, configure **Settings → Pages → Source: GitHub Actions** uma única vez.

## Branch de desenvolvimento

`feature/painel-leituras-html`

## Próximas evoluções

- leitura de XLSX;
- mapeamento de colunas por fabricante;
- armazenamento no Supabase;
- autenticação e segregação por cliente;
- análises assistidas por IA;
- conectores para John Deere Operations Center, AFS Connect e outras fontes.
