var testimonialTimeout;

const testimonials = () => {
    const buttons = document.querySelectorAll('.testimonials__buttons--button');

    if ( buttons.length === 0 ){
        return;
    }

    Array.from( buttons ).forEach( (button, index) => {
        button.addEventListener( 'click', () => {

            const parent = button.parentElement.parentElement.querySelector( '.testimonials__container--testimonials' );
            const node = parent.children[0];
            const lastNode = parent.children[parent.children.length - 1];

            const domButtons = button.parentElement.children;
            const timeout = 500;

            Array.from( domButtons ).forEach( (b) => { b.style = `pointer-events: none` } );

            if ( button.classList.contains( 'left' ) ){
                parent.style = `left: -${node.getBoundingClientRect().width}px;transition: .5s;`;
                setTimeout(
                    () => {
                        parent.removeChild(node);
                        parent.style = `left: 0;transition: 0s;`;
                        parent.appendChild(node);
                        Array.from( domButtons ).forEach( (b) => { b.style = `` } );
                    }, timeout
                );
            }else{
                parent.removeChild( lastNode );
                parent.prepend( lastNode );
                parent.style = `left: -${node.getBoundingClientRect().width}px;transition: 0s;`;
                setTimeout(
                    () => {
                        parent.style = `left: 0;`;
                    }, 1
                );
                setTimeout( 
                    () => {
                        Array.from( domButtons ).forEach( (b) => { b.style = `` } );
                    }, timeout
                );
            }

        });
    } );

    const testimonials = document.querySelectorAll('.testimonials__container--testimonials');
    Array.from( testimonials ).forEach( ( testimonial ) => {
        const leftButton = testimonial.parentElement.parentElement.querySelector( '.testimonials__buttons--button.left' );
        function moveLeft(){
            testimonialTimeout = setTimeout(
                () => {
                    leftButton.click();
                    moveLeft();
                }, 8000
            );
        }
        moveLeft();
    } );

}

const closeTestimonials = () => {
    const buttons = document.querySelectorAll('.testimonials__buttons--button');
    if ( buttons.length === 0 ){
        return;
    }

    Array.from( buttons ).forEach( (button) => {
        button.removeEventListener( 'click', getAllEventListeners( button ).click[0].listener );
    } );

    clearTimeout( testimonialTimeout );
}