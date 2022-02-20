function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    //console.log(vars);
    for(var i=0;i<vars.length;i++){
        var pair = vars[i].split("=");
        //console.log("pair:"+pair);
       // console.log(variable+":"+decodeURIComponent(pair[0]));
        if(decodeURIComponent(pair[0])==variable){
            //console.log("returning:"+pair[0]+" :"+pair[1]);
            return decodeURIComponent(pair[1]);
        }
    }
    return undefined;
}
/*
function getQueryVariable(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
*/