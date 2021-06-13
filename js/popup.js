const showPopup = () => {
    const subjects = document.querySelectorAll('[data-subject]');
    if ( subjects.length === 0 ){
        return;
    }
    const crossButton = document.querySelector('.popup__cross');
    Array.from( subjects ).forEach( ( dom ) => {
        dom.addEventListener( 'click', function popup(){
            const subject = dom.getAttribute('data-subject');
            const state = dom.parentElement.children[0].textContent;
            const popup = document.querySelector('.popup');
            document.getElementById('popup-subject').value = subject;
            document.getElementById('popup-state').value = state;
            popup.classList.add('select');
            document.querySelector('body').style.overflow = 'hidden';
        } );
    } );
    crossButton.addEventListener( 'click', function(){
        const form = document.querySelector('.popup__form');
        const popup = document.querySelector('.popup');
        popup.classList.remove('select');
        document.querySelector('body').style.overflow = 'auto';
        form.reset();
    } );
}


const closePopup = () => {
    const subjects = document.querySelectorAll('[data-subject]');
    if ( subjects.length === 0 ){
        return;
    }
    const crossButton = document.querySelector('.popup__cross');
    Array.from( subjects ).forEach( (dom) => {
        dom.removeEventListener('click', getAllEventListeners( dom ).click[0].listener);
    } );
    crossButton.removeEventListener('click', getAllEventListeners( crossButton ).click[0].listener );
}

const enquiryForm = () => {
    //------------------------CODE HERE-----------------------------------
    const xhr = new XMLHttpRequest();
    xhr.open('POST', emailAJAX);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        const data = JSON.parse( xhr.responseText );

        if ( data ){
            document.querySelector('.popup__cross').click();
            alert( 'Query Successfully Sent!' );
        }

    }
    
    const subject = document.getElementById('popup-subject').value;
    const state = document.getElementById('popup-state').value;
    const name = document.getElementById('popup-name').value;
    const phone = document.getElementById('popup-phone').value;
    const email = document.getElementById('popup-email').value;

    const query = `subject=${subject}&state=${state}&name=${name}&phone=${phone}&email=${email}`;

    xhr.send( query );

    return false;
}