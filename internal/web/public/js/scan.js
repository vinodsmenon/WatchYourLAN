let stop = false;

function stopScan() {
    stop = true;
}

async function scanAddr() {
    const addr = document.getElementById("hostIP").value;
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;

    if (begin == "") {
        begin = 1
    }
    if (end == "") {
        end = 65535
    }
    let portOpen = false;
    stop = false;

    document.getElementById('stopBtn').style.visibility = "visible";

    for (let i = begin ; i <= end; i++) {

        if (stop) {
            break;
        }

        let url = '/api/port/'+addr+'/'+i;
        portOpen = await (await fetch(url)).json();

        document.getElementById("curPort").innerHTML = "Scanning port "+i;

        if (portOpen) {
            let html = genHTML(addr, i);
            document.getElementById('foundPorts').insertAdjacentHTML('beforeend', html);
        }
    }

    document.getElementById('stopBtn').style.visibility = "hidden";
}

function genHTML(addr, port) {
    html = `<a href="http://${addr}:${port}">${port}</a>&nbsp;&nbsp;&nbsp;`;
    return html;
}