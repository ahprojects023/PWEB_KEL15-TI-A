function Pendaftaran(){
        alert("Data booking anda sudah kami terima. Silahkan menunggu balasan via whatsaapp guna konfirmasi pesanan anda. Jangan lupa patuhi protokol kesehatan!!");
}

function kesanpesan(){
        alert("Terimakasih atas kritik dan sarannya, semoga kami dapat lebih baik kedepannya.");
}

function myFunction() {
        document.getElementById("link").classList.toggle("show");
}

window.onclick = function(event) {
        if (!event.target.matches('.menu-toggle')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                console.log("Saya di klik", event)
                for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                        }
                }
        }
}