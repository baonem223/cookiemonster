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
        name: "Product",
        link: "product.html"
    },
    {
        name: "Form",
        link: "form.html"
    },
    {
        name: "Personal",
        link: "personal.html"
    }
];

const navigation = document.getElementById("primary-nav");

if (navigation) {
    const navList = document.createElement("ul");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navigationItems.forEach(function (item) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.textContent = item.name;
        link.href = item.link;

        if (currentPage === item.link) {
            link.classList.add("active");
        }

        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    navigation.appendChild(navList);
}

const year = document.getElementById("current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}
