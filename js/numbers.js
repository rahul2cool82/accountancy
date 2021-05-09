var numberScrolling;
const numbers = () => {
    const numbers = document.querySelectorAll('.number');

    if ( numbers.length === 0 ){
        return;
    }

    const values = [];

    Array.from( numbers ).forEach( (dom) => {
        values.push( parseInt( dom.querySelector('.number__header h1').textContent ) );
        dom.querySelector('.number__header h1').textContent = 0;
    } );

    const startCounting = ( dom, value ) => {

        const delay = 50;
        let current = 0;

        const flag = value / 100;

        const timeInterval = setInterval(
            () => {
                dom.querySelector('.number__header h1').textContent = parseInt( current );
                current += flag;
                if ( current >= value ){
                    current = value;
                    dom.querySelector('.number__header h1').textContent = parseInt( current );
                    clearInterval( timeInterval );
                }
            }, delay
        );
    }

    window.addEventListener( 'scroll', numberScrolling = () => {
        Array.from( numbers ).forEach( (dom, index) => {
            if ( !dom.classList.contains( 'select' ) ){
                const breakLogic = dom.getBoundingClientRect().top - window.innerHeight + dom.getBoundingClientRect().height - 100;
                if ( breakLogic < 0 && breakLogic > (-1 * dom.getBoundingClientRect().height) ){
                    dom.classList.add( 'select' );
                    startCounting( dom, values[index] );
                }

            }
        } );
    } );
}


const closeNumberScroll = () => {

    const numbers = document.querySelectorAll('.number');
    if ( numbers.length === 0 ){
        return;
    }

    Array.from( numbers ).forEach( (dom) => {
        dom.classList.remove( 'select' );
    } );

    window.removeEventListener( 'scroll', numberScrolling );
}