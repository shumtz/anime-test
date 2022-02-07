# Anime Friend Search - Teste Oderço

Vou começar falando sobre o projeto, e as escolhas que tive nele.

Deploy na Vercel: https://anime-test-chi.vercel.app/

**Update 06/02: Percebi alguns problemas no component Search na hora da digitação (Many Requests devido ao watch), portanto, coloquei um debounce, fazendo que o input espere o usuário terminar de digitar para fazer o requisição.**

### Vite

Primeiro, decidi sair do "tradicional" e resolvi trocar o "compilador" do vue, que utiliza o vue-cli e substitui para o vite, você vai me perguntar: "mas tá, porquê?", eu respondo, a algum tempo estive de olho no vite e como ele se saia superior em alguns cenários se comparado com vue-cli (levando em comparação que o vite é de 10 a 100x mais rápido que o webpack), obviamente que ambos tem seus prós e contras, mas como esse é um projeto simples que não vai mudar de cenário, os resultados foram bem agradáveis. [Why Vite?](https://vitejs.dev/guide/why.html)

### Quasar

No bate-papo que tivemos no dia 04/02, vocês comentaram se eu já tinha usado o Quasar Framework, e como comentei com vocês, nunca tinha usado ativamente (geralmente escrevo css na mão), por isso, decidi aprender um pouco mais afundo e entender seus components e fluxos. Por tanto, segui nessa linha e escrevi 100% em Quasar.


## Instalação e uso

Primeiramente para esse projeto, você deve ter Node.js instalado, você pode conseguir ele [Aqui](https://nodejs.org/). Mas minha recomendação, é que se use NVM (Node Version Manager). Caso você use windows, eu recomendo o nvm for windows, que você pode conseguir [Aqui](https://github.com/coreybutler/nvm-windows), mas caso você tenha usado sistemas baseados em Unix, pode você usar o nvm padrão, que você pode conseguir [Aqui](https://github.com/nvm-sh/nvm).

Após a instalação e configuração do Node.js, abra seu terminal e execute os seguintes comandos:
```bash
# (Opcional)

npm install yarn -g

# Yarn
yarn # Instala os pacotes do node

yarn dev # Executa o projeto em modo de desenvolvimento

yarn build # Gera a build final para seu projeto

# Caso você preferir, pode usar npm

# Npm
npm install # Instala os pacotes do node

npm run dev # Executa o projeto em modo de desenvolvimento

npm run build # Gera a build final para seu projeto

# Enjoy :)
```

**Disclaimer: Tela foi feita para se adaptar a todos os dispositivos, porem, fiz me baseando na resolução de 1920x1080**

Imagens:

![tela1](https://user-images.githubusercontent.com/44671356/152660609-690c491e-0074-4f3c-a8c5-0d305a920233.png)
![tela2](https://user-images.githubusercontent.com/44671356/152660612-8782471b-e42c-48c4-9025-82bb883efb35.png)
![tela4](https://user-images.githubusercontent.com/44671356/152660613-cfd3f30f-2579-4339-a3c7-e63ae5e2065e.png)
![tela5](https://user-images.githubusercontent.com/44671356/152660615-7094a276-9dd5-4d8b-8ddf-c2361ca1790d.png)
