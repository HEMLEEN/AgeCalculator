function fnAge() {
    // d --- date
    // m --- month
    // y--- year


    var n = document.getElementById('name').value;
    var d = document.getElementById('date').value;
    var m = document.getElementById('month').value;
    var y = document.getElementById('year').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();

    var Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d > d2) {
        d2 = d2 + Month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m > m2) {
        m2 = m2 + 12
        y2 = y2 - 1;
    }
    if (d > d2) {
        d2 = d2 + Month[m2 - 1];
        m2 = m2 - 1;
    }

    var d1 = d2 - d;
    var m1 = m2 - m;
    var y1 = y2 - y;


    document.getElementById("Age").innerHTML = "<span style='color:lightblue; font:bold'>Hi</span>" + " " + n + " " + "<br>" + "<span style='color:#lightblue;font:bold'>Your age is</span> " + " " + y1 + " " + "<span style='color:lightblue;font:bold'>Years</span>" + " " + m1 + " " + "<span style='color:lightblue;font:bold'>Months</span>" + " " + d1 + " " + "<span style='color: lightblue;font:bold'>Days</span>";

    var n = document.getElementById('name').style.display = 'none';
    var d = document.getElementById('date').style.display = 'none';
    var m = document.getElementById('month').style.display = 'none';
    var y = document.getElementById('year').style.display = 'none';
    document.getElementsByClassName('card').style.display = 'none';
}


function reset() {
    var n = document.getElementById('name').value = "";
    var d = document.getElementById('date').value = "";
    var m = document.getElementById('month').value = "";
    var y = document.getElementById('year').value = "";
    document.getElementById("Age").innerHTML = " ";

    var n = document.getElementById('name').style.display = 'block';
    var d = document.getElementById('date').style.display = 'block';
    var m = document.getElementById('month').style.display = 'block';
    var y = document.getElementById('year').style.display = 'block';
    document.getElementsByClassName('card').style.display = 'none';

}