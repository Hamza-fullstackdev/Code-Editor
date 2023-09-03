document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function () {
        const htmlCode = document.getElementById("html").value;
        const cssCode = document.getElementById("css").value;
        const jsCode = document.getElementById("js").value;

        const combinedCode = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `;

        const blob = new Blob([combinedCode], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "index.html";
        link.click();

        // Clean up the URL object to prevent memory leaks
        URL.revokeObjectURL(url);
    });
});