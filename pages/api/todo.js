const todos = [
  { id: 1, title: 'Buy groceries' },
  { id: 2, title: 'Clean the house' },
];

export default function handler(req, res) {
  const { body } = req;
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    // Handle POST request
    const newTodo = {
      id: todos.length + 1,
      title: body.title,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else if (req.method === 'PUT') {
    // Handle PUT request
    const { id, title } = body;
    const updatedTodoIndex = todos.findIndex((todo) => todo.id === id);
    if (updatedTodoIndex !== -1) {
      todos[updatedTodoIndex].title = title;
      res.status(200).json(todos[updatedTodoIndex]);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    const todoId = parseInt(body.id);
    const deletedTodoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (deletedTodoIndex !== -1) {
      const deletedTodo = todos.splice(deletedTodoIndex, 1);
      res.status(200).json(deletedTodo[0]);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else {
    // Handle other HTTP methods
    res.status(400).json({ message: 'Unsupported method' });
  }
}
