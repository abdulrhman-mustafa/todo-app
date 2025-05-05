import { useEffect, useState } from 'react';
import Form from '../Components/Form';
import ListItem from '../Components/ListItem';
import Title from '../Components/Title';
import './App.css'

function App() {

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [description, setDescription] = useState("")

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item])
  }

  function handleToggleItem(id) {
    setItems(items.map(item => (item.id == id ? {...item, selected: !item.selected}: item)))
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <main id="main">
        <div className="container">
          <div className="todo-list">
            <Title/>
            <Form 
                description={description} 
                setDescription={setDescription} 
                onAddItem={handleAddItem}
            />
            <ListItem onDeleteItem={handleDeleteItem} items = {items} onToggleItem={handleToggleItem}/>
          </div>
        </div>
    </main>
  )
}

export default App;
