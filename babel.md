# Comandos para o babel

## primeira vez / instalação
cd caminho_pasta_do_projeto

npm init

npm install babel-cli babel-preset-env


## rodar o babel

cd caminho_pasta_do_projeto

node_modules/.bin/babel src --out-dir dist --presets env --copy-files --watch
