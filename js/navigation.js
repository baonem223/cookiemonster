document.addEventListener("DOMContentLoaded", function () {

    const navigationItems = [
        {
            name: "Products",
            link: "products.html"
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


    /* Find navigation area */

    const navigation =
        document.getElementById("primary-nav");


    if (navigation) {

        const navList =
            document.createElement("ul");


        /* Determine current page */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";


        /* Create each navigation item */

        navigationItems.forEach(function (item) {

            const listItem =
                document.createElement("li");

            const link =
                document.createElement("a");


            link.textContent = item.name;

            link.href = item.link;


            /* Highlight current page */

            if (currentPage === item.link) {
                link.classList.add("active");
            }


            listItem.appendChild(link);

            navList.appendChild(listItem);

        });


        navigation.appendChild(navList);

    }


    /* Automatically update footer year */

    const year =
        document.getElementById("current-year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
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
        name: "Teaching",
        link: "teaching.html"
    },

    {
        name: "Personal",
        link: "personal.html"
    }

];
