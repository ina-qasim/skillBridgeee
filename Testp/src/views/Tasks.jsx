import { useState } from "react";
import Stats from "../components/Stats";

export default function Tasks() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask,
        date: new Date().toISOString().split('T')[0],
        priority: "medium",
        completed: false,
      },
    ]);

    setNewTask("");
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks =
    filter === "completed"
      ? tasks.filter(task => task.completed)
      : tasks;

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="page-container">
      <div className="task-header">
        <h1 className="task-title-h1">Task Manager</h1>
        <p className="task-subtitle-p">Organize and track your learning goals</p>
      </div>

      {/* STATS */}
      <div className="task-stats-grid">
        <Stats icon="📋" name="Total Tasks" numb={stats.total} variant="purple" />
        <Stats icon="✓" name="Completed" numb={stats.completed} variant="green" />
        <Stats icon="⌛" name="Pending" numb={stats.pending} variant="blue" />
      </div>

      <div className="task-input-section">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input-field task-add-input"
        />
        <button onClick={handleAddTask} className="primary-btn add-task-btn">
          Add Task
        </button>
      </div>

      <div className="task-filters-container">
        <button
          onClick={() => setFilter("all")}
          className="task-filter-btn"
          style={{
            background: filter === "all" ? '#ff7e1d' : '#e2e8f0',
            color: filter === "all" ? 'white' : '#475569',
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="task-filter-btn"
          style={{
            background: filter === "completed" ? '#ff7e1d' : '#e2e8f0',
            color: filter === "completed" ? 'white' : '#475569',
          }}
        >
          Completed
        </button>
      </div>

      {/* TASK LIST */}
      <div className="task-list-container">
        {filteredTasks.map(task => (
          <div key={task.id} className="card task-item-card">
            <div className="task-item-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
                className="task-checkbox"
              />
              <div className="task-item-info">
                <span className="task-item-title" style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#94a3b8' : '#0f172a'
                }}>
                  {task.title}
                </span>
                <div className="task-item-meta">
                  <span className="task-date-text">📅 {task.date}</span>
                  <span className="task-priority-badge" style={{
                    background: task.priority === 'high' ? '#ffe5e5' : task.priority === 'medium' ? '#fff4e5' : '#f0fdf4',
                    color: task.priority === 'high' ? '#ef4444' : task.priority === 'medium' ? '#f97316' : '#22c55e'
                  }}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="delete-task-btn"
              onClick={() => deleteTask(task.id)}
            >
              ✕
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
