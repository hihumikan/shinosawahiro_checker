document.getElementById("checkButton").addEventListener("click", function() {
    const isshinosawaHiro = Math.random() < 0.5;
    const resultText = isshinosawaHiro ? "篠澤広です" : "篠澤広ではありません";
    document.getElementById("result").textContent = resultText;
});
