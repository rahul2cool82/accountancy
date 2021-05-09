var securityTimeout;

const securitySlideshow = () => {
    const container = document.querySelector('.security__slideshow--container');

    if ( !container ){
        return;
    }

    const child = container.children[0];
    container.style = `left: -21rem;`;

    setTimeout(
        () => {
            container.removeChild( child );
            container.style = `left: 0;transition: 0s;`;
            container.appendChild( child );
        }, 301
    );

    securityTimeout = setTimeout(
        () => {
            securitySlideshow();
        }, 2000
    );
}

const closeSecuritySlideshow = () => {
    clearTimeout( securityTimeout );
}