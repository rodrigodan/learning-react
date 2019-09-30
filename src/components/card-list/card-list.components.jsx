import React from 'react';

import './card-list.styles.css';

import {Card} from '../card/card.component';

// props 
export const CardList = props => (

    /* moved this from the last commit that was in the app, cause rendering card-list is not
    responsibility of App, but the card-list component:
    */

    // however our card list component should not think about details of the elements and images

    // the reponsibility of it is another component. This one is just about thinking what to add



       /* react needs to know what elements it need to update */
        /* if one of this elements in our array has a value that changes */
        /* without that that, our jsx would need to re render everything every time */
        /* And that is heaaaavy */
        /* then, with monsters.key inside h1 */
        /* I can know what element changes and update just that instead of thousands */

    <div className = "card-list">
        {props.monsters.map(monster => (
            <Card key = {monster.id} monster = {monster} />
          ))}
    </div>
);
