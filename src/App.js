import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';
import './App.css';
import { useState } from 'react';

function App() {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [filters, setFilters] = useState([]);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const deleteBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== id));
        fetch('http://localhost:3000/bots')
          .then((resp) => resp.json())
          .then((data) => setArmy(data));
      });
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleFilter = (botClass, isChecked) => {
    if (isChecked) {
      setFilters([...filters, botClass]);
    } else {
      setFilters(filters.filter((cls) => cls !== botClass));
    }
  };

  const filteredBots = (bots) => {
    let result = [...bots];
    if (filters.length > 0) {
      result = result.filter((bot) => filters.includes(bot.bot_class));
    }
    if (sortCriteria) {
      result.sort((a, b) => b[sortCriteria] - a[sortCriteria]);
    }
    return result;
  };

  return (
    <div className="App">
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          handleEnlist={enlistBot}
          handleBack={() => setSelectedBot(null)}
        />
      ) : (
        <>
          <h1>WELCOME TO BOT BATTLR</h1>
          <SortBar handleSort={handleSort} />
          <FilterBar handleFilter={handleFilter} />
          <BotCollection
            handleEnlist={enlistBot}
            handleDelete={deleteBot}
            showDetails={setSelectedBot}
            filteredBots={filteredBots}
          />
          <YourBotArmy bots={army} handleRelease={releaseBot} />
        </>
      )}
    </div>
  );
}

export default App;