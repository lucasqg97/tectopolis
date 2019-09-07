# Criação do Projeto

Descrição dos passos realizados para a criação do template

## 1. Criação do projeto React

```bash
create-react-app hut8-boiler-plate-front
cd hut8-boiler-plate-front
```

## 2. Instalação de dependências de desenvolvimento

### [Sass](https://github.com/sass/node-sass)

Sass é uma linguagem de folhas de estilo que é compilada em CSS, permitindo utilizar uma sintaxe mais prática para descrever o estilo do HTML durante o desenvolvimento.

```bash
npm install --save-dev node-sass
```

### [Prop-Types](https://www.npmjs.com/package/prop-types)

Esta extensão permite declarar explicitamente os tipos esperados nos props de um componente React. Quando percebe um prop de tipo incorreto sendo passado emite uma mensagem de erro no console, facilitando a identificação de erros no código. O uso é arbitrário e é útil especialmente quando o código for passado para outros programadores posteriormente.

```bash
npm install --save-dev prop-types
```

### [StandardJS](https://standardjs.com/)

Linter baseado no ESLint com configuração fixa. A extensão verifica automáticamente erros de programação, padronização e estilo de código.

```bash
npm install --save-dev standard
```

### [Axios](https://github.com/axios/axios)

A biblioteca Axios é popularmente utilizada como um cliente para executar requests HTTP.

```bash
npm install --save axios
```

## 3. Configuração do VS Code com StandardJS

Instalação do plugin vscode-standardjs

```bash
mkdir .vscode
touch .vscode/settings.json
```

#### .vscode/settings.json

```javascript
{
  // Ativar formatação automática ao salvar arquivos
  "standard.autoFixOnSave": true
}
```

## 4. Adição Hook Pre-Commit do StandardJS

Impede que sejam feitos commits sem que o código esteja todo de acordo com as regras do StandardJS. Copiar o arquivo **scripts/pre-commit** para **.git/hooks/** quando clonar o repositório.

```bash
mkdir scripts
touch scripts/pre-commit
chmod +x scripts/pre-commit
cp scripts/pre-commit .git/hooks/
```

### scripts/pre-commit

```shell
#!/bin/bash

# Ensure all JavaScript files staged for commit pass standard code style
function xargs-r() {
  # Portable version of "xargs -r". The -r flag is a GNU extension that
  # prevents xargs from running if there are no input files.
  if IFS= read -r -d $'\n' path; then
    { echo "$path"; cat; } | xargs $@
  fi
}
git diff --name-only --cached --relative | grep '\.jsx\?$' | sed 's/[^[:alnum:]]/\\&/g' | xargs-r -E '' -t standard
if [[ $? -ne 0 ]]; then
  npx standard
  echo 'JavaScript Standard Style errors were detected. Aborting commit.'
  exit 1
fi
```

## 5. Reestruturação da pasta src

```bash
cd src/
mkdir assets
mkdir components
mkdir components/helpers
mkdir containers
mv App.js containers/
mkdir global
touch global/constansts.js
touch global/variables.scss
mkdir services
touch services/api.js
mv index.css index.scss
rm App.css App.test.js logo.svg
```

A estrutura resultante deve parecer com a seguinte árvore
```bash
src
├── assets                # Imagens, fontes e outros recursos
├── components            # Componentes simples
│   └── helpers           # Componentes auxiliares
├── containers            # Componentes "raíz"
│   └── App.js            # Raíz de todos os componentes
├── global                # Constantes globais
│   ├── constants.js      # Constantes javascript
│   └── variables.scss    # Constantes css
├── services              # Operações no estado interno da aplicação
│   └── api.js            # Conexão com a API principal do projeto
├── index.js
├── index.scss
└── serviceWorker.js
```

### src/index.js

Alteração de caminhos para refletir as movimentações de arquivos

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

### src/serviceWorker.js

Alterar função fetch para window.fetch para ser reconhecida pelo Standard

```javascript
103 window.fetch(swUrl)
```

### src/services/api.js

Utiliza a [Context API](https://reactjs.org/docs/context.html#when-to-use-context) do React para compartilhar a API do projeto entre os componentes

```javascript
import React, { Component } from 'react'
import axios from 'axios'

export const ApiContext = React.createContext()

const client = axios.create({
  baseURL: 'http://host',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

const requests = {
  // ...métodos da API
}

export class ApiProvider extends Component {
  render () {
    return (
      <ApiContext.Provider value={requests}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}
```

### src/containers/App.js

Alteração no arquivo padrão

```javascript
import React from 'react'
import { ApiProvider } from "../services/api";

function App () {
  // Envolve toda a aplicação em um ApiProvider para que
  // os componentes possam acessar o contexto da API
  return <ApiProvider>{/* Novo código aqui */}</ApiProvider>
}

export default App
```

## 6. Scripts para criação rápida de componentes

```bash
touch scripts/create-class-component.sh
touch scripts/create-functional-component.sh
touch scripts/create-container.sh
touch scripts/create-helper.sh
chmod +x scripts/*
```

### package.json

```javascript
// Código acima...
"scripts": {
    // Resto dos scripts...
    "create-functional-component": "scripts/create_functional_component.sh",
    "create-class-component": "scripts/create_class_component.sh",
    "create-container": "scripts/create_container.sh",
    "create-helper": "scripts/create_helper.sh"
}
// Código abaixo...
```

### Utilização

```bash
npm run create-class-component [componente]
npm run create-functional-component [componente]
npm run create-helper [componente]
npm run create-container functional-component [componente]
```

Cria a seguinte estrutura na pasta correspondente (**src/components/**, **src/components/helpers/** ou **src/containers/**)
```bash
...
├── [componente]
│   ├── [componente].js
│   └── [componente].scss
...
```
#### Componentes extendidos

Para criar um componente que extende outro, é passado o nome do componente pai seguido do novo componente (o componente pai é criado se não existir). Isto não se aplica a containers

```bash
npm run create-class-component [pai] [filho]
npm run create-functional-component [pai] [filho]
npm run create-helper [pai] [filho]
```

```bash
...
├── [pai]
│   ├── [filho]
│   │   ├── [filho].js
│   │   └── [filho].scss
│   ├── [pai].js
│   └── [pai].scss
...
```
**Obs:** O script funciona apenas para 1 nível de extensão, para extender os componentes filhos é necessário criar os arquivos manualmente.

#### Exemplo: scripts/create-class-component.sh

```shell
#!/bin/sh

create_component() {
  # Find Component path
  COMPONENT_FATHER=$1
  COMPONENT_FOLDER="src/components/$COMPONENT_FATHER/"
  COMPONENT=$COMPONENT_FATHER
  if [ "$2" != "" ] && [ $2 != $COMPONENT ]; then
    # Create father Component if it doesn't exist
    if !(test -e $COMPONENT_FOLDER); then
      create_component $1
    fi
    COMPONENT=$2
    COMPONENT_FOLDER="$COMPONENT_FOLDER$COMPONENT/"
  fi
  COMPONENT_PATH=$COMPONENT_FOLDER$COMPONENT

  # Create Component folder if it doesn't exist
  if !(test -e $COMPONENT_FOLDER); then
    mkdir $COMPONENT_FOLDER
  fi

  COMPONENT_JS="$COMPONENT_PATH.js"
  COMPONENT_SCSS="$COMPONENT_PATH.module.scss"

  # Write Component js file
  if !(test -e $COMPONENT_JS); then
    touch $COMPONENT_JS
    VAR_COMPONENT=`echo $COMPONENT | sed 's/^[A-Z]/\L&/'`
    echo "import React, { Component } from \"react\";
import classes from \"./$COMPONENT.module.scss\";

class $COMPONENT extends Component {

  render() {
    return (
      <div className={classes.$COMPONENT}>

      </div>
    );
  };
};

export default $COMPONENT;" >> $COMPONENT_JS


    echo "$COMPONENT_JS created"
  else
    echo "$COMPONENT_JS file already exists, ignoring..."
  fi

  # Write Component scss file
  if !(test -e $COMPONENT_SCSS); then
    touch $COMPONENT_SCSS
    echo ".$COMPONENT {}" >> $COMPONENT_SCSS
    echo "$COMPONENT_SCSS created"
  else
    echo "$COMPONENT_SCSS file already exists, ignoring..."
  fi
}

create_component $1 $2
```

## 7. Ao clonar este repositório

Instalar módulos com npm install e copiar arquivo pre-commit para pasta .git

```bash
npm install
cp scripts/pre-commit .git/hooks/
```