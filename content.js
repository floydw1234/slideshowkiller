
var globalSite = document.URL.split(".com/")[0];
var article = document.URL.split(".com/")[1].split("/")[0];
//main();
recursiveFill(document);

function recursiveFill(doc){
        loop(doc,function(element){
            request(element.href,function(xmlDoc){
                if(xmlDoc.URL.split(".com/")[1].split("/")[0] != article){
                    return;
                }
                //alert(xmlDoc.getElementsByTagName('a').length);
                foreignElement = xmlDoc.body;
                ///alert("asdf");
                cleanUp(foreignElement,function(doc){
                    element.parentNode.replaceChild(doc, element);
                    return recursiveFill(document);
                });
                //alert(xmlDoc.body);
                //alert("next thing Url:" + xmlDoc.URL);

            });
        });

}
function cleanUp(doc, callback){

    header = doc.getElementsByTagName('header')[0];
    for(i = 0; i < header.length ;i++){
        header[i].parentNode.removeChild(header[i]);
    }

    footer = doc.getElementsByTagName('footer');
    for(i = 0; i < footer.length; i++){
        footer[i].parentNode.removeChild(footer[i]);
    }

    ul = doc.getElementsByTagName('ul');
    for( i = 0; i < ul.length ; i++){
        ul[i].parentNode.removeChild(ul[i]);
    }

    images = doc.getElementsByTagName('img');
    for(i = 0; i < images.length ; i++){
        images[i].setAttribute('src', images[i].getAttribute('data-original'));
        images[i].removeAttribute('data-original');
    }
    callback(doc);
}


function loop(doc, callBack){
    var links = doc.getElementsByTagName('a');
    for (var i = 0, l = links.length; i < l; i++) {
        if(links[i].href.indexOf("lifebuzz.com") !== -1 && links[i].innerHTML.indexOf("Next") !== -1){
            callBack(links[i]);
        }
    }
}


function request(url, callback){
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

loop(function(element, doc){
    request(element.href,function(xmlDoc){
        foreignElement = xmlDoc.body;
        header = foreignElement.getElementsByTagName('header')[0];
        header.parentNode.removeChild(header);
        images = foreignElement.getElementsByTagName('img');
        for(i = 0; i < images.length ; i++){
            images[i].setAttribute('src', images[i].getAttribute('data-original'));
            images[i].removeAttribute('data-original');
        }
        element.parentNode.replaceChild(foreignElement, element);
        //alert(xmlDoc.title);
    });
});

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
