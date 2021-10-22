import { useEffect, useState} from "react"

import CardList from "./cardList"

const Home = () => {
    const [cards, setCards] = useState(null)

    useEffect( () => {
        fetch('http://localhost:3000/cards')
         .then(res => {
             return res.json();
         })
         .then(data => {
             setCards(data);

         })
        }, [] )

      
        return (
            <div className="home">
              {cards && <CardList cards={setCards} />}
            </div>
          );

    }

    export default Home;
        
