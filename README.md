# Portfolio

Projeto desenvolvido utilizando Angular 18.

Criei esse portfolio com o objetivo de aprimorar meus conhecimentos em front-end ao mesmo tempo que tinha uma página minha com meus projetos, conquistas, etc.

O projeto pode ser acessado através do link: https://diogoasenjo.github.io/portfolio/

## Como rodar localmente?

Basta clonar o projeto, instalar todas as depedências com "npm i". Feito isso, basta dar o comando "ng serve" que o projeto irá rodar localmente em: http://localhost:4200/
(além de óbvio é preciso ter o Angular 18 instalado na máquina)

## Como subir para o GitHub Pages?

Essa parte é mais pra mim, mas caso tenha gostado do Portfolio e queira fazer e subir no GH Pages também, basta seguir o tutorial.

Aqui é quando for fazer a primeira vez.

1. ng add angular-cli-ghpages
2. ng build --base-href "https://<seu-profile>.github.io/<projeto-angular>/"
3. npx angular-cli-ghpages --dir=dist/<projeto-angular>/browser
4. Vai na sua conta do GitHub, até o repositório do projeto > settings > pages > altera a branc para "gr/pages" e /(root)
5. npx angular-cli-ghpages --dir=dist/<projeto-angular>/browser
6. Pronto, seu projeto está online!

Aqui é quando for fazer a partir da segunda, basta buildar e subir!

1. ng build --base-href "https://diogoasenjo.github.io/portfolio/"
2. npx angular-cli-ghpages --dir=dist/portfolio/browser
