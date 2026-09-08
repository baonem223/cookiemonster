document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("primary-nav");

    if (!nav) {
        console.error("Navigation container not found.");
        return;
    }

    const pages = [
        {
            name: "About Me",
            url: "index.html"
        },
        {
            name: "Research",
            url: "research.html"
        },
        {
            name: "Teaching",
            url: "teaching.html"
        },
        {
            name: "Personal",
            url: "personal.html"
        }
    ];

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    const ul = document.createElement("ul");


    pages.forEach(page => {

        const li = document.createElement("li");

        const a = document.createElement("a");

        a.textContent = page.name;
        a.href = page.url;


        if (currentPage === page.url) {
            a.classList.add("active");
        }


        li.appendChild(a);

        ul.appendChild(li);

    });


    nav.appendChild(ul);


    // Automatically update copyright year

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
