import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <CommentList />
      <ListFilter />
      <ContactNameFilter />
      <ProductListFilter />
      <TodoList />
      <Accordion />
    </div>
  );
}

const CommentList = () => {
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

//1. 简单过滤列表 filter
const ListFilter = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [newNums, setNewNums] = useState([]);

  const numsFilter = () => {
    const result = nums.filter((num) => num > 5);
    setNewNums(result);
  };

  return (
    <div>
      <h3>List the number large than 5</h3>
      <button onClick={numsFilter}>click on</button>
      <ul>
        {newNums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};
// //2. 搜索功能filter
// const SearchName = () => {
//   const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
//   const [searchName, setSearchName] = useState(""); // user input
//   const [filterUser, setFilterUser] = useState(users);

//   const filterName = (searchName) => {
//     const result = users.filter((user) =>
//       user.toLowerCase().includes(searchName.toLowerCase())
//     );
//     setFilterUser(result);
//   };
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchName(value);
//     filterName(value);
//   };

//   return (
//     <div>
//       <h2>Search BY Name</h2>
//       <input
//         type="text"
//         placeholder="Search users..."
//         value={searchName}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {filterUser.length > 0 ? (
//           filterUser.map((user, index) => <li key={index}>{user}</li>)
//         ) : (
//           <li>No users found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

const ContactNameFilter = () => {
  const contacts = [
    { id: 1, name: "Alice", phone: "123-456-7890", city: "New York" },
    { id: 2, name: "Bob", phone: "234-567-8901", city: "Los Angeles" },
    { id: 3, name: "Charlie", phone: "345-678-9012", city: "Chicago" },
    { id: 4, name: "David", phone: "456-789-0123", city: "Houston" },
    { id: 5, name: "Eve", phone: "567-890-1234", city: "San Francisco" },
  ];
  const [inputInfo, setInputInfo] = useState(""); //input info
  const [inputFilter, setInputFilter] = useState(contacts); //after filter store information

  const filterContactInfo = (inputInfo) => {
    const result = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(inputInfo.toLowerCase()) ||
        contact.city.toLowerCase().includes(inputInfo.toLowerCase())
    );
    setInputFilter(result); //updated the filter result
  };
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputInfo(value);
    filterContactInfo(value); //调用过滤函数
  };
  const clearData = () => {
    setInputInfo("");
    setInputFilter(contacts); //update contact list
  };

  return (
    <div>
      <h2>Searching information by Name and City</h2>
      <input
        type="text"
        placeholder="Search name and city"
        value={inputInfo}
        onChange={handleOnChange}
      />
      <button onClick={clearData}>Clean the data</button>
      <ul>
        {inputFilter.map((contact, id) => (
          <li key={id}>
            {contact.name}_{contact.phone},{contact.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
//3. 多条件过滤
// 设计一个产品列表，用户可以通过价格范围（例如，低于 100 美元）和类别（例如，"电子产品"）同时筛选产品。
// 要求：
// 使用一个数组包含以下示例产品：
const ProductListFilter = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Phone", category: "Electronics", price: 800 },
    { id: 3, name: "Shoes", category: "Fashion", price: 60 },
    { id: 4, name: "Watch", category: "Fashion", price: 150 },
  ];

  const [maxPrice, setMaxPrice] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [filterProduct, setFilterProduct] = useState(products);

  const filterProductList = () => {
    const result = products.filter((product) => {
      const matchPrice = maxPrice ? product.price < parseFloat(maxPrice) : true;
      const matchCategory = selectCategory
        ? product.category === selectCategory
        : true;
      return matchPrice && matchCategory;
    });
    setFilterProduct(result);
  };
  const hanleOnChangePrice = (e) => {
    setMaxPrice(e.target.value);
    filterProductList();
  };

  const handleOnChangeCategory = (e) => {
    setSelectCategory(e.target.value);
    filterProductList();
  };
  return (
    <div>
      <h2>Product Filter By Price and Category</h2>
      <label>
        Input MaxPrice:
        <input
          type="text"
          placeholder="enter the max price "
          value={maxPrice}
          onChange={hanleOnChangePrice}
        />
      </label>
      <br />
      <label>
        Select By Catagory:
        <select value={selectCategory} onChange={handleOnChangeCategory}>
          <option value="">All the product</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </label>
      <ul>
        {filterProduct.map((product) => (
          <li key={product.id}>
            {product.name}_{product.category}(${product.price})
          </li>
        ))}
      </ul>
    </div>
  );
};
//题目：多选条件筛选任务列表
//任务描述
//实现一个任务筛选器，用户可以通过选择多个条件（例如状态、优先级）来筛选任务列表。

// const SelectList = () => {
//   const tasks = [
//     { id: 1, title: "Fix login bug", status: "open", priority: "high" },
//     {
//       id: 2,
//       title: "Add search feature",
//       status: "in-progress",
//       priority: "medium",
//     },
//     {
//       id: 3,
//       title: "Update documentation",
//       status: "completed",
//       priority: "low",
//     },
//     { id: 4, title: "Improve performance", status: "open", priority: "high" },
//   ];

//   const [selectStatus, setSelectStatus] = useState("");
//   const [selectPriority, setSelectPriority] = useState("");
//   const [taskFilter, setTaskFilter] = useState(tasks);

//   const updateByStatusPriority = (statusFilters, priorityFilters) => {
//     const result = tasks.filter((task) => {
//       const matchesStatus = statusFilters.length
//         ? statusFilters.includes(task.status)
//         : true;
//       const matchFilters = priorityFilters.length
//         ? priorityFilters.includes(task.priority)
//         : true;
//       return matchesStatus && matchFilters; // statsfacist by same time
//     });
//     setTaskFilter(result);
//   };
//   const handleStatusChange = (status) => {
//     const updatedStatus = selectStatus.includes(status)
//       ? selectStatus.filter((s) => s !== status)
//       : [...selectStatus, status];
//     setSelectStatus(updatedStatus);
//     updateByStatusPriority(updatedStatus, selectPriority);
//   };
//   const handlePriorityChange = (priority) => {
//     const updatedPriority = selectPriority.includes(priority)
//       ? selectPriority.filter((p) => p != priority)
//       : [...selectPriority, priority];
//     setSelectPriority(updatedPriority);
//     updateByStatusPriority(selectStatus, updatedPriority);
//   };
//   return (
//     <div>
//       <h2>Select the Task</h2>
//       <div>
//         <h3>Filter by Status</h3>
//         <label>
//           <input
//             type="checkbox"
//             value="open"
//             checked={selectStatus.includes("open")}
//             onChange={() => handleStatusChange("open")}
//           />
//           Open
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="in-progress"
//             checked={selectStatus.includes("in-progress")}
//             onChange={() => handleStatusChange("in-progress")}
//           />
//           in-progress
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             value="completed"
//             checked={selectStatus.includes("completed")}
//             onChange={() => handleStatusChange("completed")}
//           />
//           Completed
//         </label>
//       </div>
//       <ul>
//         {taskFilter.length > 0 ? (
//           taskFilter.map((task) => (
//             <li key={task.id}>
//               {task.title} - {task.status} - {task.priority}
//             </li>
//           ))
//         ) : (
//           <li>No tasks found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

//综合题目：实现动态订单统计和排序界面
//背景描述
// 你正在构建一个订单管理系统的界面。用户可以：

// 筛选订单：根据订单状态（如 completed, pending, cancelled）。
// 排序订单：按订单金额从高到低、或从低到高排序。
// 统计订单金额：统计筛选后订单的总金额。
// 动态显示订单：展示订单的基本信息。

//题目：假设你有以下用户数据，要求实现一个 React 组件，按以下步骤处理并展示数据：

const TodoList = () => {
  const initialTodos = [
    { id: 1, task: "Walk the dog", completed: false },
    { id: 2, task: "Water the plants", completed: false },
    { id: 3, task: "Wash the dishes", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  // 添加新任务
  const handleAddTodo = () => {
    if (input.trim() === "") return; // 避免空任务
    const newTodo = { id: Date.now(), task: input.trim(), completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // 标记任务为已完成（但不移除）
  const handleMarkAsCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // 更新输入框的值
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="Input your todos"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Submit</button>
      </div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                color: t.completed ? "gray" : "black", // 已完成的任务显示为灰色
              }}
            >
              {t.task}
            </span>
            {!t.completed && ( // 仅在任务未完成时显示 "Mark as Completed" 按钮
              <button onClick={() => handleMarkAsCompleted(t.id)}>
                Mark as Completed
              </button>
            )}
            <button onClick={() => handleToggleComplete(t.id)}>
              {t.completed ? "Undo" : null}
            </button>
          </li>
        ))}
      </ul>
      <p>
        Completed: {todos.filter((t) => t.completed).length} Total todo List:
        {todos.length}
      </p>
    </div>
  );
};

const Accordion = () => {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <div className="item" key={i}>
          <div className="header" onClick={handleToggle}>
            <p className="number">{i < 9 ? `0${i + 1}` : i + 1}</p>
            <p className="title">{el.title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
          </div>
          {isOpen && <div className="content-text">{el.text}</div>}
        </div>
      ))}
    </div>
  );
};

export default App;
