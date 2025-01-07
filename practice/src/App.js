import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <CommentList />
      <ListFilter />
      <SearchName />
      <ContactNameFilter />
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
//2. 搜索功能filter
const SearchName = () => {
  const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [searchName, setSearchName] = useState(""); // user input
  const [filterUser, setFilterUser] = useState(users);

  const filterName = (searchName) => {
    const result = users.filter((user) =>
      user.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilterUser(result);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchName(value);
    filterName(value);
  };

  return (
    <div>
      <h2>Search BY Name</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchName}
        onChange={handleInputChange}
      />
      <ul>
        {filterUser.length > 0 ? (
          filterUser.map((user, index) => <li key={index}>{user}</li>)
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

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

export default App;
