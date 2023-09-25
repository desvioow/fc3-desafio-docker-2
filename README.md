# fc3-desafio-docker-2
 
Desafio 2) curso Full Cycle 3.0 - Docker


## Como executar
Na raíz do repositório apenas executar docker-compose up que todo ambiente será levantado.
Ao acessar localhost:8080 a request primeiramente passará pelo nginx atuando como um proxy reverso, que por sua vez encaminha para outro container contendo uma aplicação feita com Node.js. Este se comunica com um terceiro container contendo um database mySQL para inserir e recuperar dados devolvendo de volta para o proxy reverso.

## Containers
1) nginx
2) node
3) mySQL

## docker-compose up em máquina local
![image](https://github.com/desvioow/fc3-desafio-docker-2/assets/25798412/f6a45bac-4f4c-4ab0-9f57-899f07af2b8e)
![image](https://github.com/desvioow/fc3-desafio-docker-2/assets/25798412/b5f01c97-fa5e-45e5-9ccb-519c7ee36a97)
