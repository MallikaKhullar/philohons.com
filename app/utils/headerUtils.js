exports.getHomeHeaders = () => [
    { type: "Home", link: "", isBold: true },  
    { type: "Blog", link: "blog"},  
    {
        type: "Categories",
        children: [
            { type: "Admissions", link: "blog/admissions" },
            { type: "1st Year Students", link: "blog/first-year" }
        ]
    },
    { type: "Contact", link: "contact"},  
]

exports.getBlogHeaders = () => [
    { type: "Home", link: ""},  
    { type: "Blog", link: "/blog", isBold: true },  
    {
        type: "Categories",
        children: [
            { type: "1st Year Students", link: "blog/first-year" },
            { type: "Admissions", link: "blog/admissions" }
        ]
    },
    { type: "Contact", link: "contact"},  
]

exports.getBlogMain = () => [
    { type: "Home", link: "", isBold: true },  
    {
        type: "Categories",
        children: [
            { type: "Admissions", link: "blog/admissions" },
            { type: "1st Year Students", link: "blog/first-year" }
        ]
    },
    { type: "Contact", link: "contact"},  
]