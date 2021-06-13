const emailAJAX = 'https://yu.adhyay.co.in/accountant/index.php';

const ajaxPagination = () => {
    const anchors = document.querySelectorAll('a');
    Array.from( anchors ).forEach( ( a ) => {
        if ( a.getAttribute('href') === '#' || a.hasAttribute( 'target' ) || a.hasAttribute( 'download' )  ){
            // do not perform anything
        }else{
            a.addEventListener( 'click', ajaxing = (e) => {
                e.preventDefault();
                showLoader();
                const xhr = new XMLHttpRequest();
                xhr.open( 'GET', a.getAttribute('href'), true );
                xhr.onload = function(){
                    setTimeout(
                        () => {
                            document.querySelector('app').parentElement.removeChild( document.querySelector('app') );
                            const data = xhr.responseText;
                            const html = document.createElement( 'html' );
                            html.innerHTML = data;
                            const app = html.querySelector( 'app' );
                            document.querySelector('body').appendChild( app );
                            var obj = { Title: html.querySelector('title').textContent, Url: preDomain + a.getAttribute('href') };  
                            history.pushState(obj, obj.Title, obj.Url);
                            removeLoader();
                        }, 501
                    );
                }
                xhr.send();
            } );
        }

    } );
}