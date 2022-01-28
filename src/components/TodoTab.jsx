import { useEffect } from "react";
import { Tabs, Layout, Row, Col, List } from "antd";
import TodoItem from "./TodoItem";

const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }) => {
  return (
    <>
      <List
        locale={{ emptyText: "There is nothing to do" }}
        dataSource={todos}
        renderItem={(todo) => (
          <TodoItem
            todo={todo}
            onTodoToggle={onTodoToggle}
            onTodoRemoval={onTodoRemoval}
          />
        )}
        pagination={{
            position: 'bottom',
            pageSize: 10,
        }}
      />
    </>
  );
};

export default TodoTab;
