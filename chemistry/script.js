function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "elementhangman":
            window.location.href = "fungames/ElementHangman.html";
            break;
        case "molecularmania":
            window.location.href = "fungames/MolecularMania.html";
            break;
        case "oxiquest":
            window.location.href = "fungames/OxiQuest.html";
            break;
        case "solublesolutions":
            window.location.href = "fungames/SolubleSolutions.html";
            break;
        case "learnreactions":
            window.location.href = "learn/index.html";
            break;
        default:
            alert("Subject not found!");
    }
}