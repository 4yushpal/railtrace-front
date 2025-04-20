import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Layout from './Layout';

const chatData = [
  { id: 1, name: "Smita Salekar", message: "First-class overcrowded! (Nerul)", date: "20 Mar 07:04 PM", likes: 7 },
  { id: 2, name: "Kisan Bind", message: "Next stop? (Kurla)", date: "20 Mar 07:59 PM", likes: 1 },
  { id: 3, name: "Rakesh Kumar", message: "Kidhar jana hai? (Seawood)", date: "20 Mar 08:04 PM", likes: 2 },
  { id: 4, name: "Suraj Kavale", message: "Chunabhatti (Vashi)", date: "20 Mar 08:10 PM", likes: 5 },

];

function TrainChat() {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState(chatData);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      name: user?.name || "Anonymous",
      message: newMessage,
      date: new Date().toLocaleTimeString(),
      likes: 0,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  if (!user) {
    return (
      <Layout>
        <div className="bg-orange-500 p-4 flex items-center justify-between">
            <button className="text-2xl" onClick={() => window.history.back()}>
            ←
            </button>
            <h1 className="text-xl font-bold text-black">Train Chat</h1>
            <div className="w-6"></div>
        </div>
      <div className="bg-gray-200 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-500">Please Login to continue!</h2>
        </div>
      </div>
      </Layout>
    );
  }

  return (
    <Layout>
       <div className="bg-orange-500 p-4 flex items-center justify-between">
            <button className="text-2xl" onClick={() => window.history.back()}>
            ←
            </button>
            <h1 className="text-xl font-bold text-black">Train Chat</h1>
            <div className="w-6"></div>
        </div>
    <div className="min-h-screen p-4 bg-gray-200">
      <div className="bg-white p-4 rounded-lg shadow">
        {/* <h2 className="text-xl font-bold">Train Chat</h2> */}
        {messages.map((msg) => (
          <div key={msg.id} className="p-3 border-b">
            <span className="font-semibold">{msg.name}</span>: {msg.message}{" "}
            <span className="text-gray-500">({msg.date})</span>
          </div>
        ))}
        <input
          className="w-full mt-2 p-2 border rounded"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="w-full mt-2 p-2 bg-orange-500 text-white rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
    </Layout>
  );
}

export default TrainChat;