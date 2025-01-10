function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "fillgame":
            window.location.href = "fillGame/index.html";
            break;
        case "math-game-master":
            window.location.href = "http://localhost:3001/index.html";
            break;
        case "blockgame":
            window.location.href = "blockgame/index.html";
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