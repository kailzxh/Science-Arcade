
function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "math":
            window.location.href = "math/index.html";
            break;
        case "physics":
            window.location.href = "physics/index.html";
            break;
        case "chemistry":
            window.location.href = "chemistry/index.html";
            break;
        case "biology":
            window.location.href = "biology/index.html";
            break;
        case "coding":
            window.location.href = "coding/index.html";
            break;
        default:
            alert("Subject not found!");
    }
}
