window.onload = function(){
    additem("감자",1123,23);
    additem("포도",123,3);
    additem("복숭아",123,0);
    additem("감자",1123,23);
    additem("포도",123,3);
    additem("복숭아",123,0);
    additem("감자",1123,23);
    additem("포도",123,3);
    additem("복숭아",123,0);
    additem("감자",1123,23);
    additem("포도",123,3);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
    additem("복숭아",123,0);
};

function additem(pname,pprice,pleft){
    var tbody = document.getElementById('item');
    var row = tbody.insertRow(tbody.rows.length);
    var num = row.insertCell(0);
    var name = row.insertCell(1);
    var price = row.insertCell(2);
    var count = row.insertCell(3);
    var left = row.insertCell(4);

    var vleft = pleft;

    num.innerHTML = tbody.rows.length;
    name.innerHTML = pname;
    price.innerHTML = pprice;

    var countEl = document.createElement("input")
    countEl.setAttribute('id',"item"+num.innerHTML);
    countEl.setAttribute('type',"number");
    countEl.setAttribute('min',0);
    countEl.setAttribute('value',0);



    if(pleft == 0) {
        row.classList.add('soldOut');
        vleft = "품절";
        countEl.readOnly = true;
    }
    count.appendChild(countEl);
    left.innerHTML = vleft;
}