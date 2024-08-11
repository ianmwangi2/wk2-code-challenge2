import React from 'react'
import BotCard from './BotCard';

function BotCollection({ handleEnlist, handleDelete, showDetails, filteredBots }) {
    const [bots, setBots] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/bots')
        .then((resp) => resp.json())
        .then((data) => setBots(data));
    }, []);
  
    const displayedBots = filteredBots(bots);

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