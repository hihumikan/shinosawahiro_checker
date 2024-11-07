document.getElementById("checkButton").addEventListener("click", function() {
    const isShinozawaHiro = Math.random() < 0.5;
    const resultText = isShinozawaHiro ? "篠澤広です" : "篠澤広ではありません";
    document.getElementById("result").textContent = resultText;
});
