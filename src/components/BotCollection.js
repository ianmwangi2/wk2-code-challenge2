import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';

function BotCollection({ handleEnlist, handleDelete, showDetails, filteredBots }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://wk2-backend.vercel.app/bots')
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  const displayedBots = filteredBots(bots);

  return (
    <div className="bot-collection">
      {displayedBots.length ? (
        displayedBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleEnlist={handleEnlist}
            handleDelete={handleDelete}
            showDetails={showDetails}
          />
        ))
      ) : (
        <p>BOTS</p>
      )}
    </div>
  );
}

export default BotCollection;
