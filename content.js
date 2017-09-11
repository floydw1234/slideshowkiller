var links = document.getElementsByTagName('a');

//main();

function recursiveFill(link, CurrentTitle, NextTitle){
    return;
}


function loop(callBack){
    var links = document.getElementsByTagName('a');
    for (var i = 0, l = links.length; i < l; i++) {
        if(links[i].href.indexOf("lifebuzz.com") !== -1 && links[i].innerHTML.indexOf("Next") !== -1){
            callBack(links[i]);
        }
    }
}

loop(function(element){
    request(element.href,function(xmlDoc){
        foreignElement = xmlDoc.body;
        header = foreignElement.getElementsByTagName('header')[0];
        header.parentNode.removeChild(header);
        var temp = document.createElement("body");
        temp.innerHTML = foreignElement.childNodes[0].nodeValue;
        element.parentNode.replaceChild(temp, element);
        //alert(xmlDoc.title);
    });
});


function request(url,callback){
    //alert("hi");
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        callback(this.responseXML);
    }
    xhr.open("GET", url);
    xhr.responseType = "document";
    xhr.send();
}
/*

for (var i = 0, l = links.length; i < l; i++) {
    if(links[i].href.indexOf("lifebuzz.com") !== -1 && links[i].innerHTML.indexOf("Next") !== -1){
            url = links[i].href;

            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
              //alert(this.responseXML.title);
              var head = document.createElement("h1");
              head.innerHTML = "asdf";
              links[i].parentNode.replaceChild(head, links[i]);
            }
            xhr.open("GET", url);
            xhr.responseType = "document";
            xhr.send();
    }
}
// a[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
*/
