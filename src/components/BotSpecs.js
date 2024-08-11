import React from 'react';

function BotSpecs({ bot, handleEnlist, handleBack }) {
  return (
    <div className="bot-specs">
      <button onClick={handleBack}>Back to Collection</button>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => handleEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
