window.onload = function(){

    document.cookie = "userName=Tom"
    let cookieName = "NameC";
    let cookieValue = "Value ! valu2 $ &";
    document.cookie = `${encodeURIComponent(cookieName)}=${encodeURIComponent(cookieValue)}`;

    document.cookie = "user=Den; path=/; expires=Tue, 31 Dec 2024 03:14:07 GMT";
    document.cookie = "userName=Tom; max-age=0";
    document.cookie = "userName=NameC; max-age=600";

    let cokieStorage = document.cookie;
    console.log(cokieStorage);
}