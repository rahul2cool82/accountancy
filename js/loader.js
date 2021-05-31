
window.onload = () => {
    removeLoader();
   // window.removeEventListener( 'load', getAllEventListeners( window ).load[0].listener );
}

const preLoader = () => {
    window.onload = () => {
        removeLoader();
        window.removeEventListener( 'load', getAllEventListeners( window ).load[0].listener );
    }
}

const removeLoader = () => {
    startApp();
    const loader = document.querySelector('.loader');

    if ( !loader ){
        return document.querySelector( 'body' ).style.overflow = 'unset';
    }

    setTimeout(
        () => {
            loader.classList.remove( 'select' );
            document.querySelector( 'body' ).style.overflow = 'unset';
            window.scrollTo( {top: 0} );
        }, 2000
    );
}

const showLoader = () => {
    closeApp();
    const loader = document.querySelector('.loader');
    loader.classList.add( 'select' );
    document.querySelector( 'body' ).style.overflow = 'hidden';

}