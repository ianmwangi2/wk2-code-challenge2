import React from 'react'

function BotCollection() {
  return (
    <div className='bot-collection'>
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
        <p>No bots found</p>
      )}
    </div>
  )
}

export default BotCollection