var storage = 0;
var π = 3.1415926535;

function equationadd(n) {
    document.getElementById("output").value += n;
}

function addition() {
    document.getElementById("output").value += "+";
}

function subtraction() {
    document.getElementById("output").value += "-";
}

function multiplication() {
    document.getElementById("output").value += "*";
}

function division() {
    document.getElementById("output").value += "/";
}

function decimal() {
    document.getElementById("output").value += ".";
}

function caret() {
    document.getElementById("output").value += "**";
}

function parenopen() {
    document.getElementById("output").value += "(";
}

function parenclose() {
    document.getElementById("output").value += ")";
}

function pi() {
    document.getElementById("output").value += "π";
}

function clearmemory() {
    storage = "";
}

function c() {
    document.getElementById("output").value = "";
    document.title="Calculator"
}

function del() {
    document.getElementById("output").value = document.getElementById("output").value.slice(0,-1)
}

function store() {
    storage = document.getElementById("output").value;
}

function restore() {
    document.getElementById("output").value += storage;
}

function answer() {
    try {
        document.title = document.getElementById("output").value + "=" + eval(document.getElementById("output").value)
        document.getElementById("output").value = eval(document.getElementById("output").value)
    }

    catch(e) {
        document.getElementById("output").value = "ERROR: " + e;
    }

}