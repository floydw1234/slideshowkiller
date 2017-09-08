var links = document.links;

function recursiveFill(link, CurrentTitle, NextTitle){
    return;
}

for (var i = 0, l = links.length; i < l; i++) {
    if(links[i].href.indexOf("lifebuzz.com") !== -1 && links[i].innerHTML.indexOf("Next") !== -1){
            url = links[i].href;

            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
              //alert(this.responseXML.title);
              var head = document.createElement("p");
              head.innerHTML = "asdf";

              links[i].parentNode.replaceChild(head, links[i]);
              alert("asdf")
            }
            xhr.open("GET", url);
            xhr.responseType = "document";
            xhr.send();


    }
}
// a[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
