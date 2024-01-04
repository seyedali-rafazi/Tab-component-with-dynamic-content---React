import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeCloser, setActiveCloser] = useState(true);
  const [count, setCount] = useState(0);

  const handelActiveTab = (id) => {
    setActiveTab(id);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className="tab-closer">
        <button onClick={() => setActiveCloser((isOpen) => !isOpen)}>❌</button>
      </div>
      {activeCloser ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                onClick={() => handelActiveTab(tab.id)}
                key={tab.id}
                className={activeTab == tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab_content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        <p>Is closed</p>
      )}
    </div>
  );
}

export default App;
