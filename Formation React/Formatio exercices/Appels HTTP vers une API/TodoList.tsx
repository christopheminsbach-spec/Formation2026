import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoList() {
  // 1. Déclarer todos (Todo[]), isLoading (false),
  //    error (string | null)
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 2. Fonction async qui fetch sur
  //    https://jsonplaceholder.typicode.com/todos
  //    -> setTodos,
  //       catch + setError,
  //       finally = isLoading
  const loadTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) {
        throw new Error("Erreur lors du chargement.");
      }

      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Une erreur est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Rendu conditionnel :
  //    loading, puis error,
  //    puis la liste avec map()

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <button onClick={loadTodos}>Charger les tâches</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;