# Adicionando mais componentes e 

1. Criamos uma nova pasta dentro de `components` chamada `List` para adicionarmos os arquivos em que desenvolveremos os items na lista de tarefas `index.tsx` e `style.scss`

2. Criamos então diretamente um function component e dentro dele adicionamos as tags com a descrição da tarefa e o tempo para conclusão

3. Separaremos o componente **`List`** do **`Item`**.

4. Criar outra pasta em `components` chamada `Item` com os arquivos `index.tsx` e `style.scss`.

Colocar dentro deles toda a lógica do item da lista `<li>`.

*Pausa de vídeo - Hook useState()*

**Queremos agora fazer o nosso `Form` enviar as informações digitadas para o nosso `Item`.**

1. Falar sobre o `useState()` que utilizaremos para cada input

[Link da documentação](https://pt-br.reactjs.org/docs/hooks-state.html)

2. Adicionar os estados para os inputs de `task` e `time`.

Para isso então crio as duas `const`

```ts
const [task, setTask] = useState('')
const [time, setTime] = useState('00:00')
```

E também adiciono as propriedades dos inputs de `task` e `time`:

```ts
value={task}
onChange={(event) => { setTask(event.target.value) }}
```

Por fim, ao invés de imprimirmos no `onSubmit` quando dermos enter com o `console.log("texto")`, posso agora imprimir esses valores que eu inserir:

```ts
function handleOnSubmit (event: React.FormEvent<HTMLFormElement>){
    console.log(task, time)
    event.preventDefault()
}
```





. Criaremos a função `saveItem`, que irá de fato salvar o que escrevemos no formulário

Para isso, usaremos uma interface

```ts
interface IFormProps {
    saveItem: (data: IItemProps) => void
}
```

import {IItemProps} from '../../types/Item'

interface IFormProps {
    saveItem: (time: string, task: string) => void
}

{ saveItem }: IFormProps