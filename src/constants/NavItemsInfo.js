const navItemsInfo = [
    { name: "Home", type: "link", ref : "/"},
    { name: "Articles", type: "link" , ref : "/blog"},
    {
      name: "Pages",
      type: "dropdown",
      items: [
        { title: "About us"},
        { title: "Contact us"},
      ]
      , ref : "/"
      
    },
    { name: "Pricing", type: "link" , ref : "/"},
    { name: "Faq", type: "link" , ref : "/"},
  ];

  export default navItemsInfo;