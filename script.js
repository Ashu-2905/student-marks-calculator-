function calculate() {
    const name = document.getElementById("name").value;
    const m1 = Number(document.getElementById("m1").value);
    const m2 = Number(document.getElementById("m2").value);
    const m3 = Number(document.getElementById("m3").value);
    const m4 = Number(document.getElementById("m4").value);
    const m5 = Number(document.getElementById("m5").value);

    if (!name || [m1,m2,m3,m4,m5].some(isNaN)) {
        result.style.color = "red";
        result.innerText = "Please fill all fields correctly!";
        return;
    }

    const total = m1 + m2 + m3 + m4 + m5;
    const percentage = (total / 500) * 100;

    let grade = "";
    let status = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    status = percentage >= 40 ? "PASS ✅" : "FAIL ❌";

    result.style.color = "green";
    result.innerHTML = `
        Name: ${name}<br>
        Total: ${total} / 500<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}<br>
        Status: ${status}
    `;
}

function resetData() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    result.innerHTML = "";
}
