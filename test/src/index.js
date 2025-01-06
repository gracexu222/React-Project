const { useState } = require("react");

const checkNumberType = (num) => {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
};
console.log(checkNumberType(10)); // 输出: "Positive"
console.log(checkNumberType(-5)); // 输出: "Negative"
console.log(checkNumberType(0)); // 输出: "Zero"

const getValidName = (inputName) => {
  return inputName ?? "Anonymous";
};

console.log(getValidName("Grace")); // 输出: "Grace"
console.log(getValidName(null)); // 输出: "Anonymous"
console.log(getValidName(undefined)); // 输出: "Anonymous"

const getFirstTruthy = (a, b, c) => {
  return a || b || c;
};
console.log(getFirstTruthy(0, null, "Hello")); // 输出: "Hello"
console.log(getFirstTruthy(false, 0, "")); // 输出: undefined
console.log(getFirstTruthy(undefined, true, "Grace")); // 输出: true

const canAccessContent = (userLoggedIn, isAdmin) => {
  return userLoggedIn || isAdmin;
};
console.log(canAccessContent(true, false)); // 输出: true
console.log(canAccessContent(false, true)); // 输出: true
console.log(canAccessContent(false, false)); // 输出: false

const getMaxValue = (a, b) => {
  return a > b ? a : a < b ? b : "Equal";
};
console.log(getMaxValue(10, 20)); // 输出: 20
console.log(getMaxValue(30, 15)); // 输出: 30
console.log(getMaxValue(5, 5)); // 输出: "Equal"

// const names = ["Alice", "Bob", "Grace"];
// const NameList = () => {
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// };

// const categories = [
//   {
//     name: "Fruits",
//     items: ["Apple", "Banana", "Orange"],
//   },
//   {
//     name: "Vegetables",
//     items: ["Carrot", "Broccoli", "Spinach"],
//   },
// ];
// const CategoryList = ({ categories }) => {
//   return (
//     <div>
//       {categories.map((category, index) => (
//         <div key={index}>
//           <h3>{category.name}</h3>
//           <ul>
//             {category.items.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

const todos = [
  { id: 1, task: "Learn React", completed: true },
  { id: 2, task: "Write code", completed: false },
  { id: 3, task: "Fix bugs", completed: true },
];

// const TodoList = () => {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.completed ? <s>{todo.task}</s> : todo.task}</li>
//       ))}
//     </ul>
//   );
// };
const items = ["Milk", "Bread", "Cheese"];

// receive props
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
<ItemList items={items} />;

//题目 2: 渲染对象列表
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Grace", age: 22 },
];

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name},{user.age} years old
        </li>
      ))}
    </ul>
  );
};

<UserList users={users} />;

//题目 3: 条件渲染
const tasks = [
  { id: 1, task: "Learn React", completed: true },
  { id: 2, task: "Write code", completed: false },
  { id: 3, task: "Fix bugs", completed: true },
];

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((e) => (
        <li key={e.id}>{e.completed ? <s>{e.task}</s> : e.task}</li>
      ))}
    </ul>
  );
};

<TaskList tasks={tasks} />;
//题目 4: 嵌套列表
const categories = [
  { name: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { name: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
];

const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((n, index) => (
        <div key={index}>
          <h3>{n.name}</h3>
          <ul>
            {n.items.map((item, indx) => (
              <li
                key={indx}
                style={{ color: item.length > 5 ? "red" : "green" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

<CategoryList categories={categories} />;
//题目 5: 动态样式

//题目 6: 动态添加和删除项目

//题目 7: 渲染多层嵌套对象
const comments = [
  {
    id: 1,
    text: "This is the first comment",
    replies: [
      { id: 11, text: "Reply to first comment" },
      { id: 12, text: "Another reply to first comment" },
    ],
  },
  {
    id: 2,
    text: "This is the second comment",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.text}
          {comment.replies.length > 0 && (
            <ul>
              {comment.replies.map((reply) => (
                <li key={reply.id}>{reply.text}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

<CommentList comments={comments} />;
//交互功能：

//添加按钮显示/隐藏回复：

//题目 8: 分组渲染
const products = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Carrot", category: "Vegetables" },
  { id: 4, name: "Spinach", category: "Vegetables" },
];

const GroupByCategory = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.categories ? "Fruits" : "Vegetables"}</h3>
          <ul>
            <li>{product.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

<GroupByCategory products={products} />;
