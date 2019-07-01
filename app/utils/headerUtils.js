exports.getHeaderHome = () => [
    { type: "Blog", link: "blog", isBold: true },  
    {
        type: "Categories",
        children: [
            { type: "Admissions", link: "blog/admissions" },
            { type: "1st Year Students", link: "blog/first-year" }
        ]
    },
    { type: "Contact", link: "contact"},  
]

exports.getBlogHome = () => [
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