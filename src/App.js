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

export default App