import { TodoProvider } from '../store/TodoContext';
import TodoApp from '../components/todo/TodoApp';

const HomePage = () => {
  return (
    <TodoProvider>
      <div className="container">
        <TodoApp />
      </div>
    </TodoProvider>
  );
};

export default HomePage;
