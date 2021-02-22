# ![meiosis-logo](https://raw.githubusercontent.com/shade-12/meiosis/cdcf9ef29819617eaf29ebba5533a528f45c7454/frontend/src/assets/meiosis-logo.svg) Meiosis

A chrome browser extension that provides recommendations for similar sites to conduct further research, making your research experience ab***cell***lutely ***c***t***ell***ar. Meiosis also provides tools to identify conflicting information presented by different sites and to automatically generate citations for the sites you visit.

## How It Works

A URL of the active site is sent to the backend server to run our scraping script with. Then, SERP API is used to mimic Google Search with the keywords obtained from our scrapper. Natural Language Processing (NLP) is then used to process the content of each websites obtained from SERP API, to identify the presence of conflicting information presented by each sites. In addition, citations are also generated for each recommended sites, as well as the original site. The backend code was deployed on AWS using a serverless framework. The browser extension user interface was prototyped with Figma and built using React. It focused on displaying information in a clear and concise manner.

## Developers
- [Claire Song](https://github.com/cxsong1)
- [Shade Wong](https://github.com/shade-12)
- [Eric Hua](https://github.com/huaqiwen)
- [Lambert Ji](https://github.com/xuanyi110)
