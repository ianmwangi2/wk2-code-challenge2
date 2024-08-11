import React from 'react'

function BotCard({ bot, handleEnlist, handleDelete, showDetails }) {
    return (
        <div className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>NAME: {bot.name}</h3>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => showDetails(bot)}>View Details</button>
          <button onClick={() => handleEnlist(bot)}>Enlist</button>
          <button onClick={() => handleDelete(bot.id)}>X</button>
        </div>
      );
    }
    
    export default BotCard;