# Desafio (2) curso Full Cycle 3.0 - Docker
## Descrição
Ao acessar localhost:8080 a request primeiramente passará pelo nginx atuando como um proxy reverso, que por sua vez encaminha para outro container contendo uma aplicação feita com Node.js. Este se comunica com um terceiro container contendo um database mySQL para inserir e recuperar dados devolvendo de volta para o proxy reverso.

## Como executar
Na raíz do repositório apenas executar docker-compose up que todo ambiente será levantado.

## Containers envolvidos
1) nginx
2) node
3) mySQL
