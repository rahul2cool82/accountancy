const slide = {
    current : 0
}

const slideImage = ( direction, to ) => {
    const slideImages = document.querySelectorAll('.slideImage');
    Array.from( slideImages ).forEach( (image, index) => {
        image.classList.add( 'unset' );

        if ( image.classList.contains('select') && direction === 'right' ){
            const current = image;
            const next = slideImages[to];
            setTimeout(
                () => {
                    current.setAttribute('class', 'slideImage right');
                    next.setAttribute('class', 'slideImage select left');

                    setTimeout(
                        () => {
                            next.classList.remove('left');
                        }, 1000
                    )

                }, 300
            );

        }

        else if ( image.classList.contains('select') && direction === 'left' ){

            const current = image;
            const prev = slideImages[to];

            setTimeout(
                () => {
                    current.setAttribute('class', 'slideImage left');
                    prev.setAttribute('class', 'slideImage select right');

                    setTimeout(
                        () => {
                            prev.classList.remove('right');
                        }, 1000
                    )

                }, 300
            );

        }

    } );
    

}

const slideChange = ( direction, to ) => {
    
    const slides = document.querySelectorAll('.slide');
    Array.from( slides ).forEach( ( slide, index ) => {
        if ( slide.classList.contains('select') ){
            slide.classList.remove('select');
            const next = slides[ to ];
            next.classList.add( 'select' );
        }
    } );

}

function slideshow( direction, to ){
    slideImage( direction, to );
    slideChange( direction, to );
}

var slideshowTimeout;
Array.from( document.querySelectorAll('.slideshow__buttons--button') ).forEach( (button, index) => {

    const slideChange = () => {

        if ( slide.current === index )
            return;
        clearTimeout(slideshowTimeout);
        
        Array.from( document.querySelectorAll('.slideshow__buttons--button') ).forEach( b => {
            b.classList.remove('select');
            b.style.pointerEvents = 'none';
        } );

        button.classList.add('select');

        if ( slide.current < index ){
            slideshow('left', index);
        }else{
            slideshow('right', index)
        }
        slide.current = index;
        setTimeout(
            () => {
                Array.from( document.querySelectorAll('.slideshow__buttons--button') ).forEach( b => {
                    b.style.pointerEvents = 'auto';
                } );
                setSlideShowTimeout();
            }, 1301
        );
    }

    button.addEventListener('click', slideChange);
} );


const setSlideShowTimeout = () => {
    slideshowTimeout = setTimeout(
        () => {
            const buttons = document.querySelectorAll('.slideshow__buttons--button');
            Array.from( buttons ).forEach( (button, index) => {
                if ( button.classList.contains('select') ){
                    let b;
                    if ( index >= buttons.length - 1 ){
                        b = buttons[ 0 ];
                    }else{
                        b = buttons[ index + 1 ];
                    }
                    setTimeout(
                        () => {
                            b.click();
                        }, 1
                    );
                }
            } );
        }, 10000
    );
}

setSlideShowTimeout();