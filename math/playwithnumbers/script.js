function showMessage(subject) {
    switch (subject.toLowerCase()) {
        case "difference":
            window.location.href = "game-of-differences.html";  
            break;
        case "sums":
            window.location.href = "game-of-sums.html";  
            break;
        case "triplets":
            window.location.href = "game-of-triplets.html"; 
            break;
        case "animals":
            window.location.href = "set-sizes-animals.html";  
            break;
        case "shapes":
            window.location.href = "set-sizes-shapes.html";  
            break;
        case "memory":
            window.location.href = "triple-number-memory.html"; 
            break;

        default:
            alert("Subject not found!");
    }
}
