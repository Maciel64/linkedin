interface TodoSchema {
  id: number;
  title: string;
  completed: boolean;
}

// 1. Readonly<Type>

function createTodo (createTodo: Readonly<TodoSchema>) {
  return 'Todo created!'
}

// 2. Partial<Type>

function updateTodo (todoId: number, updateTodo: Partial<TodoSchema>) {
  return 'Todo updated!'
}


// 3. Record<Keys, Type>

type TodoName = 'comprar' | 'limpar' | 'levar'

const todos: Record<TodoName, TodoSchema> = {
  comprar: {
    id: 1, title: 'Comprar comida', completed: false
  },
  limpar: {
    id: 2, title: 'Limpar a casa', completed: true
  },
  levar: {
    id: 3, title: 'Levar o cachorro no PET', completed: false
  }
}

// 4. Pick<Type, Keys>

const TodosTitle: Pick<TodoSchema, "title">[] = [
  { title: 'Estudar para a prova' },
  { title: 'Enviar o e-mail' },
  { title: 'Fazer exercícios' }
]

// 5. Omit<Type, Keys>

const TodosInfo: Omit<TodoSchema, "id" | "completed">[] = [
  { title: 'Agendar uma consulta' },
  { title: 'Resolver o problema de conexão' },
  { title: 'Organizar papelada' }
]