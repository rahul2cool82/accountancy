var serviceScrolling;

const services = () => {
    const numbers = document.querySelectorAll( '.services__service h1 span' );
    if ( numbers.length === 0 ){
        return;
    }

    const values = [];
    Array.from( numbers ).forEach( ( dom ) => {
        values.push( parseInt( dom.textContent ) );
        dom.textContent = 0;
    } );

    const startCounting = ( dom, value ) => {
        const delay = 50;
        let current = 0;

        const flag = value / 50;

        const timeInterval = setInterval(
            () => {
                const loader = dom.parentElement.parentElement.querySelector( '.services__service--loader div' );
                dom.textContent = parseInt( current );

                loader.style = `width: ${current}%`;
                current += flag;

                if ( current >= value ){
                    current = value;
                    dom.textContent = parseInt( current );
                    loader.style = `width: ${current}%`;
                    clearInterval( timeInterval );
                }

            }, delay
        );
    }

    window.addEventListener( 'scroll', serviceScrolling = () => {
        Array.from( numbers ).forEach( (dom, index) => {
            const parent = dom.parentElement.parentElement;

            if ( !parent.classList.contains( 'select' ) ){
                const breakLogic = parent.getBoundingClientRect().top - window.innerHeight + parent.getBoundingClientRect().height - 100;
                if ( breakLogic < 0 && breakLogic > (-1 * parent.getBoundingClientRect().height) ){
                    parent.classList.add( 'select' );
                    startCounting( dom, values[index] );
                }
            }

        } );
    } );

}

const closeServiceScrolling = () => {
    const numbers = document.querySelectorAll('.services__service h1 span');
    if ( numbers.length === 0 ){
        return;
    }

    window.removeEventListener( 'scroll', serviceScrolling );
}
