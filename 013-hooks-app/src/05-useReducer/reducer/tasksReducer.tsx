import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo [];
  length: number;
  completed: number;
  pending: number
}

export type TaskAction = { type: 'ADD_TODO', payload: string } | { type: 'TOGGLE_TODO', payload: number } | {
  type: 'DELETE_TODO',
  payload: number
};

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
})

const TaskStateScheme = z.object({
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
  todos: z.array(TodoSchema)
})

export const getTasksInitialState = (): TaskState => {
  console.log(localStorage.getItem('tasks-state'))
  const data = localStorage.getItem('tasks-state')
  if (!data) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  }
  const result = TaskStateScheme.safeParse(JSON.parse(data));
  if (result.error) {
    console.log(result.error)
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    }
  }
  return result.data
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      }
      const todos = [...state.todos, newTodo]
      //No hay que mutar el estado, hay que devolver uno nuevo

      return {
        ...state,
        todos,
        length: todos.length,
        pending: todos.length + 1
      };
    }

    case 'TOGGLE_TODO': {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed}
        }

        return todo
      })
      return {
        ...state, todos: updatedTodos,
        pending: updatedTodos.filter((todo) => !todo.completed).length,
        completed: updatedTodos.filter((todo) => todo.completed).length
      }
    }

    case 'DELETE_TODO': {
      const todos = state.todos.filter(todo => todo.id !== action.payload);
      const completedTodos = todos.filter(todo => todo.completed).length;
      return {
        ...state,
        todos: todos,
        length: todos.length,
        completed: completedTodos,
        pending: todos.length - completedTodos
      };
    }

    default:
      return state;
  }
};