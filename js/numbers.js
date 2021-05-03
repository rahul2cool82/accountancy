const numberScroll = () => {
    const numbers = document.querySelectorAll('.number');
    const values = [];

    Array.from( numbers ).forEach( (dom) => {
        values.push( parseInt( dom.querySelector('.number__header h1').textContent ) );
        dom.querySelector('.number__header h1').textContent = 0;
    } );

    const startCounting = ( dom, value ) => {

        const delay = 50;
        let current = 0;

        const flag = value / 200;

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

    window.addEventListener( 'scroll', function(){
        Array.from( numbers ).forEach( (dom, index) => {
            if ( !dom.classList.contains( 'select' ) ){
                const breakLogic = dom.getBoundingClientRect().top - window.innerHeight + dom.getBoundingClientRect().height;
                if ( breakLogic < 0 && breakLogic > (-1 * dom.getBoundingClientRect().height) ){
                    dom.classList.add( 'select' );
                    startCounting( dom, values[index] );
                }

            }
        } );
    } );
}

numberScroll();