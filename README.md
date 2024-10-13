# node-tests-jest# Projeto Calculadora

Este projeto é uma calculadora simples implementada em Node.js, que fornece funcionalidades básicas como adição, subtração, multiplicação e divisão. O projeto também inclui testes automatizados utilizando o Jest para garantir que as operações matemáticas funcionem corretamente.

## Funcionalidades
- **Soma**: Adiciona dois números.
- **Subtração**: Subtrai um número de outro.
- **Multiplicação**: Multiplica dois números.
- **Divisão**: Divide um número por outro (com verificação de divisão por zero).

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript.
- **Jest**: Framework de testes para JavaScript.

## Estrutura do Projeto
calculator/ │ ├── calculator.js # Implementação das funções de cálculo ├── tests/ # Diretório contendo os testes │ └── calc.test.js # Testes das funções da calculadora ├── package.json # Gerenciador de pacotes └── babel.config.js # Configuração do Babel

bash
Copiar código

## Instalação
Siga os passos abaixo para configurar o projeto localmente:
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd calculator
Instale as dependências:
bash
Copiar código
npm install
Executando os Testes
Para rodar os testes, execute o seguinte comando:

bash
Copiar código
npm test
O Jest irá executar os testes e fornecer um relatório sobre o que passou e o que falhou.

Exemplos de Uso
Você pode usar as funções da calculadora diretamente no seu código:

javascript
Copiar código
import { sum, subtract, multiply, divide } from './calculator.js';

console.log(sum(1, 2));           // Saída: 3
console.log(subtract(5, 2));      // Saída: 3
console.log(multiply(3, 4));       // Saída: 12
console.log(divide(10, 2));        // Saída: 5
Erros
A função de divisão lança um erro se houver uma tentativa de dividir por zero:

javascript
Copiar código
try {
    divide(5, 0);
} catch (error) {
    console.error(error.message);  // Saída: Divisão por zero não é permitida!
}
Contribuição
Sinta-se à vontade para fazer sugestões, melhorias ou correções. Para contribuir, siga as diretrizes padrão de pull request.

Licença
Este projeto está sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.

perl
Copiar código

Sinta-se à vontade para copiar e colar isso em um arquivo `README.md` no seu projeto!
