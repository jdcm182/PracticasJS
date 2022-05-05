//React router DOM
// declarativa  - eficiente - flexible

// consola ---->> npx  create-react-app demo-clase
//  cd demo-clase
// npm start


// bajar plugin react-developer-tools




//Cards.jsx
import React from 'react';

import Card from './Card.jsx';

export default function Cards(props) { //props destructuring: /*{ max, min, name, img, onClose }*/
    // acá va tu código
    // tip, podés usar un map
    {
        //var citiesList = props.cities.map(c => <Card max={c.max} min={c.min} name={c.name} img={c.img} onClose={c.onClose} />);
        //c => /*<Card max={max} min={min} name={name} img={img} onClose={onClose} *//>); / / props.cities.map(c => <p>{name}</p>);
        /*                          <Card
                                      max={Cairns.main.temp_max}
                                      min={Cairns.main.temp_min}
                                      name={Cairns.name}
                                      img={Cairns.weather[0].icon}
                                      onClose={() => alert(Cairns.name)}
                                    /> */
        //console.log('citiesList: ', citiesList);
    }
    return
    //<div>Cards Component</div>
    //citiesList


};


