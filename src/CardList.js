const CardList = ({cards}) => {
    return (
      <div>
          {cards.map( card => (
              <div>
                  <h1>{card.number}</h1>
                  <h1>{card.initials}</h1>
                  <h1>{card.person}</h1>
                  <h1>{card.action}</h1>
              </div>
          ))}
      </div>  
    )

}

export default CardList