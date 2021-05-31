const tabs = () => {
    const tiles = document.querySelectorAll('.tabs__tiles p');
    if ( tiles.length === 0 ){
        return;
    }
    Array.from( tiles ).forEach( ( tile, index ) => {
        tile.addEventListener( 'click', function tileClick(){
            console.log('clicked');
            const tileTabs = document.querySelectorAll( '.tabs__tab' );
            Array.from( tileTabs ).forEach( (t,i) => { t.classList.remove('select'); tiles[i].classList.remove('select') } );
            tile.classList.add('select');
            tileTabs[index].classList.add('select');
        } );
    } );
}

const closeTabs = () => {
    const tiles = document.querySelectorAll('.tabs__tiles p');
    if ( tiles.length === 0 ){
        return;
    }
    Array.from( tiles ).forEach( (tile) => {
        tile.removeEventListener( 'click', getAllEventListeners( tile ).click[0].listener );
    } );
}