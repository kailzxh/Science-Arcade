function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "simulation":
            window.location.href = "Simulation/index.html";
            break;
        case "matter":
            window.location.href = "Matter-Madness/index.html";
            break;
        case "physics-app":
            window.location.href = "http://localhost:3002";
            break;
        case "matter":
            window.location.href = "Matter-Madness-master/index.html";
            break;
        case "play":
            window.location.href = "playwithnumbers/index.html";
            break;
        default:
            alert("Subject not found!");
    }
}