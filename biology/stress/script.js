function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "crossword":
            window.location.href = "Stress/crossword/index.html";
            break;
        case "gravity":
            window.location.href = "Stress/Gravity Game/index.html";
            break;
        case "picturequiz":
            window.location.href = "Stress/picture quiz/index.html";
            break;
        // case "solublesolutions":
        //     window.location.href = "CellBiology/crossword/index.html";
        //     break;
        // case "learnreactions":
        //     window.location.href = "learn/index.html";
        //     break;
        default:
            alert("Subject not found!");
    }
}