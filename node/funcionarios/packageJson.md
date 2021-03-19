use no terminal 
# npm init #
(para iniciar um arquivo package.json, onde terá detalhes do seu projeto)
Se não quiser responder perguntas use 
# npm init -y #

Para baixar e declarar no package.json alguma depêndencia use
# npm i --save <nome do pacote> #

Pacote apenas para desenvolvimento, não para produção
# npm i --save-dev <nome do pacote> # 


* Além de descrever seu projeto, também deve ter todas as descrições de todas as dependências presentes no seu projeto.


* Tendo um package.json num diretório, basta entrar nesse diretório através do terminal e executar o código abaixo, que a pasta node_modules será restaurada, com todos os arquivos declarados.
# npm i #


* Dentro do package.json existe scripts, os que fazem parte da documentação do node, são executados naturalmente
# npm <nome do script> #
já aqueles que não são devem ser chamados com
# npm run <nome do script> #
