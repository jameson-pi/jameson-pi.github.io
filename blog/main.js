var obj = "{ table : 'data.json',limit: =1000000000000000000000000 }";
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    myObj = JSON.parse(this.responseText);
    for (x in myObj) {
      txt += "<article>";
      txt += "<h3>" + myObj[x].title + "</h3>"
      txt += "<hr />"
      txt += "<p>" + myObj[x].dis + "</p>";
      txt += "<p class='date'" + myObj[x].date + '</p>'
      txt += "</article>";
    }
    document.getElementById("demo").innerHTML = txt;
}
xmlhttp.open("POST", "data.json", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);