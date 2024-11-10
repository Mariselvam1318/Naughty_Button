let a = 0;
        
        function naughty() {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const pwd = document.getElementById("pwd").value;
            const atpos = email.indexOf("@");
            const dotpos = email.lastIndexOf(".");
            const btn = document.getElementById("btn");
            if ((username === "" || atpos < 1 || dotpos - atpos < 2 || pwd === "" || email === "") && a === 0) {
                buttonmoveleft();
                a = 1;
            } else if ((username === "" || atpos < 1 || dotpos - atpos < 2 || pwd.length !== 8 || pwd === "" || email === "") && a === 1) {
                buttonmoveright();
                a = 2;
            } else if ((username === "" || atpos < 1 || dotpos - atpos < 2 || pwd.length !== 8 || pwd === "" || email === "") && a === 2) {
                buttonmoveleft();
                a = 1;
            }
            else {
                resetbtn(); 
            }
        }
        
        function buttonmoveleft() {
            const btn = document.getElementById("btn");
            btn.style.transform = "translateX(-180%)";
        }
        
        function buttonmoveright() {
            const btn = document.getElementById("btn");
            btn.style.transform = "translateX(180%)";
        }
        
        function resetbtn() {
            const btn = document.getElementById("btn");
            btn.style.transform = "translateX(0%)";
        }

function submitForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (username !== "" && atpos > 0 && dotpos - atpos > 1 && pwd.length === 8 && email !== "") {
        alert("Form submitted successfully!");
    } else {
        naughty();
    }
}