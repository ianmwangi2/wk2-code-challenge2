import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, handleRelease }) {
  return (
    <div className="bot-army">
        <div>
            <h1>
                Your Bot Army
            </h1>
        </div>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleEnlist={() => {}}
          handleDelete={() => handleRelease(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
