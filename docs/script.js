window.onload = function(){
    const totalEl = document.getElementById('total');
    const tbodyEl = document.getElementById('item');
    document.addEventListener('input', function() {
        var total=0;
        for(var i=1; i<=tbodyEl.rows.length; i++){
            var el1 = document.getElementById("price"+i);
            var el2 = document.getElementById("item"+i);
            total += (el1.innerHTML.replace(/,/g,"")?parseInt(el1.innerHTML.replace(/,/g,"")):0) * (el2.value.replace(/,/g,"")?parseInt(el2.value.replace(/,/g,"")):0);
            //alert("num:"+i+"\nprice:"+(el1.innerHTML?parseInt(el1.innerHTML):0)+"\ncount:"+(el2.value?parseInt(el2.value):0)+"\nsubtotal:"+(el1.innerHTML?parseInt(el1.innerHTML):0) * (el2.value?parseInt(el2.value):0)+"\ntotal:"+total);
        }
        totalEl.innerHTML = setComma(total);
    });


    additem("감자",5000,23);
    additem("포도",1000,3);
    additem("복숭아1",123,10);
    additem("복숭아2",123,0);
    additem("복숭아3",123,0);
    additem("복숭아4",123,0);
    additem("복숭아5",123,0);
    additem("복숭아6",123,0);
    additem("복숭아7",123,0);
    additem("복숭아8",123,0);
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
    priceEl.innerHTML = setComma(pprice);
    price.appendChild(priceEl);

    var countEl = document.createElement("input")
    countEl.setAttribute('id',"item"+num.innerHTML);
    countEl.setAttribute('type',"number");
    countEl.setAttribute('min',0);
    countEl.setAttribute('max',pleft);
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

function setComma ( value ) {
    if (value == null || value == ""){
        return value;
    }
    // 소수점 분리
    var valueArr = value.toString().split(".");
    var str = valueArr[0].toString();
        str = str.replace ( /,/g ,'' );
    var retValue = "";
 
    for( var i = 1; i <= str.length; i++ ) {
        if ( i > 1 && ( i % 3 ) == 1 )
            retValue = str.charAt ( str.length - i ) + "," + retValue;
        else
            retValue = str.charAt ( str.length - i ) + retValue;
    }
    return retValue + (valueArr.length > 1 ? "." + valueArr[1] : "");
}