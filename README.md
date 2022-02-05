# Anime Friend Search - Teste Oderço

Vou começar falando sobre o projeto em si, e as escolhas que tive nele.

Deploy na Vercel: https://anime-test-chi.vercel.app/

### Vite

Primeiro, decidi sair do "tradicional" e resolvi trocar o "compilador" do vue, que utliza o vue-cli e substitui para o vite, você vai me perguntar: "mas tá, porque?", eu respondo, a algum tempo estive de olho no vite e como ele se saia superior em alguns cenarios se comparado com vue-cli (levando em comparação que o vite é de 10 a 100x mais rapido que o webpack), obviamente que ambos tem seus pros e contras, como esse é um projetinho simples que não vai mudar de cenario, e os resultados foram bem agradaveis. [Why Vite?]([asd](https://vitejs.dev/guide/why.html))

### Quasar

No bate-papo que tivemos no dia 04/02, vocês comentaram se eu já tinha usado o Quasar Framework, e como comentei com vocês, nunca tinha usado ativamente (geralmente escrevo css na mão), então por isso, decidi aprender um pouco mais afundo e entender seus components e fluxos. Por tanto, segui nessa linha e escrevi 100% em Quasar.


## Instação e uso

Primeiramente para esse projeto, você deve ter Node.js instaldo, você pode conseguir ele [Aqui](https://nodejs.org/). Mas minha recomedação, é que se use NVM (Node Version Manager). Caso você use windows, eu recomendo o nvm for windows, que você pode conseguir [Aqui](https://github.com/coreybutler/nvm-windows), mas caso você tenha usado sistemas baseados em Unix, pode você usar o nvm padrão, que você pode conseguir [Aqui](https://github.com/nvm-sh/nvm).

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
