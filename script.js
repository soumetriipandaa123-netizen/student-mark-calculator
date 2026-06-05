function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let error = document.getElementById("error");

    // Validation
    if (
        s1 < 0 || s1 > 100 ||
        s2 < 0 || s2 > 100 ||
        s3 < 0 || s3 > 100 ||
        s4 < 0 || s4 > 100 ||
        s5 < 0 || s5 > 100
    ) {
        error.innerHTML = "Please enter marks between 0 and 100.";
        return;
    }

    error.innerHTML = "";

    // Total
    let total = s1 + s2 + s3 + s4 + s5;

    // Percentage
    let percentage = total / 5;

    // Grade
    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Pass / Fail
    let status;

    if (
        percentage >= 60 &&
        s1 >= 35 &&
        s2 >= 35 &&
        s3 >= 35 &&
        s4 >= 35 &&
        s5 >= 35
    ) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML =
        percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("status").innerHTML = status;
}