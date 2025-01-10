function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "cell":
            window.location.href = "cell/index.html";
            break;
        case "clinical":
            window.location.href = "clinical/index.html";
            break;
        case "ecology":
            window.location.href = "ecology/index.html";
            break;
        case "infectious":
            window.location.href = "infectious/index.html";
            break;
        case "stress":
            window.location.href = "stress/index.html";
            break;
        default:
            alert("Subject not found!");
    }
}