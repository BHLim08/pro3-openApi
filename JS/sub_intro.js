    document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./txt/intro.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.querySelector(".book_intro .book_content").innerHTML = data;
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });