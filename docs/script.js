window.onload = function(){
    const totalEl = document.getElementById('total');
    document.addEventListener('input', function(e) {
        if(e.target && e.target.id.startsWith('item')) {
            var itemnum = e.target.id.replace("item","");
            var priceEl = document.getElementById("price"+itemnum);
            var countEl = document.getElementById("item"+itemnum);
            totalEl.value = parseInt(totalEl.value) + parseInt(priceEl.value)*parseInt(countEl.value);
        }
    });


    additem("감자",5000,23);
    additem("포도",1000,3);
    additem("복숭아",123,0);
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

    var priceEl = document.createElement("span");
    priceEl.setAttribute('id',"price"+num.innerHTML);
    priceEl.innerHTML = pprice;
    price.appendChild(priceEl);

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

function getPickUp(){
    var radioList = document.querySelectorAll("input");
    var result = "er";
    radioList.forEach(node => {
        if(node.getAttribute('type')=="radio") {
            if(node.checked) {
                result = node.value;
            }
        }
    });
    return result;
}

function pickUpCheck() {
    const addressForm = document.querySelector('.cAddressCont');
    if(getPickUp()=="deliver"){
        addressForm.classList.remove('hide');
    } else {
        addressForm.classList.add('hide');
    }
}