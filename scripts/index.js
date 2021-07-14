const batailles = data['batailles']['bataille'];


const sendMailButton = () => {
    const name = "test";
    const domain = "example.com"
    const object = document.getElementById("object").value;
    var message = "";
    const lines = document.getElementById("message").value.split('\n');
    lines.forEach((item) => {
        message = message + item + "%0D%0A";
    });

    const href = "mailto:"+name+"@"+domain+"?subject="+object+"&body="+message;
    redirect(href);
};

const openRandom = () => {
    const random = getRandomInt(batailles.length);
    const href = "bataille.html?id="+random;
    redirect(href);
};
