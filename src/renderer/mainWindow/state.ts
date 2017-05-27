declare interface Task {
  key: number;
  isComplete: boolean;
  task: string;
}
declare interface State {
  openAddModal: boolean;
  filter: 'All' | 'Active' | 'Completed';
  tasks: Task[];
}
