# Atividade de modelagem de uma aplicativo usando React Native com Expo para consumo de API pública

## Objetivo
A atividade consiste em modelar um aplicativo para consumo de uma API pública de teste conhecida como "JSON Placeholder". A documentação da API pode ser acessada no link a seguir: https://jsonplaceholder.typicode.com/ .

## Rotas
As rotas a serem usadas serão para a realização de operações CRUD dos usuários existentes na API usando a rota https://jsonplaceholder.typicode.com/users com todos os métodos disponíveis.
**Observação**: os dados manipulados não são exibidos quando requisitados posteriormente. Exemplo: um usuário de id 1 poderá sofrer alterações dos dados na requisição. A API retorna como sucesso, mas não exibe a alteração realizada na requisição anterior. A API apenas retorna o sucesso ou erro da requisição.

## Uso do pacote NPM ‘axios’
Para a requisitar as rotas do item anterior, será necessário usar o pacote NPM ‘axios’ que já está configurado no projeto.

## Dados a serem usados
Os dados que deverão ser consumidos e manipulados devem ser de acordo com parte da resposta a seguir:
```
{
"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },

```
## Estrutura de pastas e arquivos recomendada
```
app/
 ├── index.tsx // Arquivo de entrada do aplicativo
 ├── _layout.tsx // Configuração das rotas
 └── users/
 	   ├── index.tsx // Lista de usuários com nome e e-mail
      ├── user.tsx // Tela com detalhes do usuário
 	   └── form.tsx // Formulário de criação ou alteração dos dados do usuário

types/
 └── users.ts // Criação da interface de dados do usuário
services/
 └── userService.ts // Operações CRUD dos dados de usuário

```
## Confirmação das requisições
Cada operação CRUD (exceto a de listagem de todos os usuários) deverão ter um componente de alerta que confirme a operação realizada. Escolham como esse componente deverá ser exibido na tela.

## Configuração do TailwindCSS
A configuração do TailwindCSS deverá ser feita no projeto de acordo com o tutorial disponível em: https://www.nativewind.dev/docs/getting-started/installation . A configuração deve seguir comandos que usem o Expo. Acessem o link anterior para mais detalhes.
**Observação**: usem o mesmo estilo de componentes em todas as telas do aplicativo.

## Solicitações de pull requests
Cada membro da equipe deverá solicitar uma pull request ao repositório original de acordo com a realização de sua parte da tarefa designada pelo sorteio feito em sala de aula

## Equipes e suas tarefas
1) Configuração do TailwindCSS, criação e configuração dos arquivos `index.tsx` e `_layout.tsx` e criação da pasta `app/users`;
2) Criação da pasta `types` e do arquivo `users.ts` e criação da pasta `services` e do arquivo `userService.ts`;
3) Criação do arquivo `app/users/index.tsx` e a modelagem da tela com os usuários;
4) Criação do arquivo `app/users/user.tsx` e a modelagem da tela com os dados do usuário;
5) Criação do arquivo `app/users/form.tsx` e a modelagem da tela com o preenchimento dos dados do usuário;

## Sorteio das equipes
Será feito em uma plataforma online com resultado anexado na atividade na plataforma Sala de Aula





