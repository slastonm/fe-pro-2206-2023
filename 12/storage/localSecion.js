window.onload = function(){
    window.sessionStorage.setItem('SetKey1', 'Hello sessionStorage');
    window.sessionStorage.SetKey2 = 'Test value';
    window.sessionStorage['SetKey3'] = 'Test value 3';
    // console.log(`${window.sessionStorage.SetKey1}`);
    // console.log(`${window.sessionStorage.getItem('SetKey2')}`);
    // console.log(`${window.sessionStorage['SetKey3']}`);
    let storageSession = window.sessionStorage;
    // console.log(storageSession);
    
    
    window.localStorage.setItem('SetKeyLocal1', 'Hello localStorage');
    window.localStorage.SetKeyLocal2 = 'Test value';
    window.localStorage['SetKeyLocal3'] = 'Test value 3';
    console.log(`${window.localStorage.SetKeyLocal1}`);
    console.log(`${window.localStorage.getItem('SetKeyLocal2')}`);
    console.log(`${window.localStorage['SetKeyLocal3']}`);

    window.localStorage.removeItem('SetKeyLocal2');
    window.localStorage.clear();

    // window.localStorage.user = {userName:'Tom', userAge:20};
    let dataForStorage = {userName:'Tom', userAge:20};
    window.localStorage.user = JSON.stringify( dataForStorage );

    let userData = JSON.parse( window.localStorage.getItem('user'));
    console.log(userData);

    let localStorage = window.localStorage;
    console.log(localStorage);

    

}