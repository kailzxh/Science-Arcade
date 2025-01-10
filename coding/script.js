function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "codearcade":
            window.location.href = "http://localhost:5173/";
            break;
        case "catchpokemon":
            window.location.href = "catch-pokemon/index.html";
            break;
        // case "oxiquest":
        //     window.location.href = "fungames/OxiQuest.html";
        //     break;
        // case "solublesolutions":
        //     window.location.href = "fungames/SolubleSolutions.html";
        //     break;
        // case "learnreactions":
        //     window.location.href = "learn/index.html";
        //     break;
        default:
            alert("Subject not found!");
    }
}