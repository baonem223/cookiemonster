document.addEventListener("DOMContentLoaded", function () {

    // Main navigation links
    const navigationItems = [
        {
            name: "About Me",
            link: "index.html"
        },
        {
            name: "Research",
            link: "research.html"
        },
        {
            name: "Teaching",
            link: "teaching.html"
        },
        {
            name: "Personal",
            link: "personal.html"
        }
    ];


    // Get navigation container
    const navigation = document.getElementById("primary-nav");


    if (navigation) {

        const navList = document.createElement("ul");

        navigationItems.forEach(function (item) {

            const listItem = document.createElement("li");

            const link = document.createElement("a");

            link.textContent = item.name;
            link.href = item.link;

            // Highlight current page
            const currentPage =
                window.location.pathname.split("/").pop() || "index.html";

            if (currentPage === item.link) {
                link.classList.add("active");
            }

            listItem.appendChild(link);

            navList.appendChild(listItem);
        });

        navigation.appendChild(navList);
    }


    // Automatically update footer year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
