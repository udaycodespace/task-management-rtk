// src/components/Tasks.jsx
import React from 'react';
import { 
  useGetTasksQuery, 
  useAddTaskMutation, 
  useUpdateTaskMutation, 
  useDeleteTaskMutation 
} from '../features/tasks/tasksApi';

const Tasks = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [addTask, { isLoading: isAdding }] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  // Issue #8: Handle Loading and Error States
  if (isLoading) return <div>Loading tasks from API...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  // Optimized Add Handler with Alert
  const handleAdd = async () => {
    try {
      await addTask({ title: 'New Intern Task', completed: false, userId: 1 }).unwrap();
      alert('Task Added (Server Mocked Success)');
    } catch (err) {
      alert('Failed to add task');
    }
  };

  // Optimized Delete Handler with Alert
  const handleDelete = async (id) => {
    try {
      await deleteTask(id).unwrap();
      alert(`Task ${id} Deleted (Server Mocked Success)`);
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  // Optimized Toggle Handler
  const handleToggle = async (task) => {
    try {
      await updateTask({ id: task.id, completed: !task.completed }).unwrap();
      alert(`Task status updated!`);
    } catch (err) {
      alert('Failed to update status');
    }
  };

  return (
    <div style={{ textAlign: 'left', marginTop: '20px' }}>
      <h2>Tasks</h2>
      <button onClick={handleAdd} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Sample Task'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks?.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              marginRight: '15px',
              display: 'inline-block',
              width: '300px'
            }}>
              {task.title}
            </span>
            
            <button onClick={() => handleToggle(task)}>
              Toggle Status
            </button>
            
            <button 
              onClick={() => handleDelete(task.id)} 
              style={{ color: 'red', marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;