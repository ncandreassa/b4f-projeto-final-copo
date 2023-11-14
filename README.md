# Copo: Seu app de bebidas favorito

O Copo é uma aplicação desenvolvida utilizando Node.js, Next.js e MongoDB, criada para proporcionar aos usuários uma experiência única na busca e descoberta de receitas de drinks.

## Funcionalidades Principais

- **Consulta de Receitas:** Explore uma nossa base de dados de drinks, com receitas detalhadas e instruções passo a passo.
- **Favoritos:** Guarde suas receitas preferidas para acessá-las facilmente mais tarde.
- **Busca Avançada:** Encontre a receita perfeita filtrando por ingredientes, nome ou tipo (alcoólico/não alcoólico).
- **Gere uma lista de drinks aleatórios:** Não sabe o que fazer para os amigos hoje a noite? A gente cuida disso!
- **Use a criatividade:** Crie suas próprias próprias receitas no app.

## Tecnologias Utilizadas

- **Node.js:** Base da aplicação, proporcionando uma execução eficiente do lado do servidor.
- **Next.js:** Framework React para uma experiência de desenvolvimento moderna e eficiente.
- **MongoDB:** Banco de dados NoSQL para armazenar e gerenciar as receitas de forma flexível e escalável.

## Como Iniciar

Siga estas etapas para rodar o Copo no seu ambiente de desenvolvimento:

1. **Pré-requisitos:**
   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Certifique-se de ter o MongoDB instalado e o MongoDB Compass para facilitar a administração visual do banco de dados.

2. **Configuração do Banco de Dados:**
   - Abra o MongoDB Compass e conecte-se a uma instância local ou remota do MongoDB.
   - Crie uma nova database chamada "Copo".
   - Dentro da database "Copo", crie duas collections: "receitas" e "users".

3. **Seed de Receitas:**
   - Na raiz do projeto, encontre o arquivo `receitas.json` em `/public/assets/data`.
   - Utilize o MongoDB Compass para [importar este arquivo](https://www.mongodb.com/docs/compass/current/import-export/) (`receitas.json`) na collection "receitas" da database "Copo". Isso preencherá a collection com dados de mock.

4. **Instalação das Dependências:**
   ```bash
   npm install
   ```

5. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação:**
    - Abra seu navegador e visite http://localhost:3000 para começar a explorar as receitas.

