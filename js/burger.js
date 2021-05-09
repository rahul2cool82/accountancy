const burger = () => {

    const burger = document.querySelector('.menu__burger');
    const mobnav = document.querySelector('.mobnav');
    const mobnavHeight = mobnav.scrollHeight;

    burger.addEventListener( 'click', function(){
        if ( burger.classList.contains( 'select' ) ){
            burger.classList.remove( 'select' );
            mobnav.style = `--height: 0px`;
        }else{
            burger.classList.add( 'select' );
            mobnav.style = `--height: ${mobnavHeight}px`;
        }
    } );

    const mobnavDrops = document.querySelectorAll('.mobnav__item.drop');
    Array.from( mobnavDrops ).forEach( (drop, index) => {
        const dropdown = document.querySelectorAll('.mobnav__dropdown')[index];
        drop.addEventListener( 'click', function(){
            if ( dropdown.classList.contains( 'select' ) ){
                dropdown.classList.remove( 'select' );
                dropdown.style = "--height: 0px";
                mobnav.style = `--height: ${mobnavHeight}px`;
            }else{
                Array.from( document.querySelectorAll('.mobnav__dropdown') ).forEach( (d) => {
                    d.classList.remove( 'select' );
                    d.style = "--height: 0px";
                } );
                dropdown.classList.add( 'select' );
                dropdown.style = `--height: ${dropdown.scrollHeight}px`;
                const containerHeight = mobnavHeight + dropdown.scrollHeight;
                mobnav.style = `--height: ${containerHeight}px`;
            }
        } );
    } );

}

const closeBurger = () => {
    const burger = document.querySelector('.menu__burger');
    burger.removeEventListener( 'click', getAllEventListeners( burger ).click[0].listener );
    const mobnavDrops = document.querySelectorAll('.mobnav__item.drop');
    Array.from( mobnavDrops ).forEach( ( drop ) => {
        drop.removeEventListener( 'click', getAllEventListeners( drop ).click[0].listener );
    } );
}