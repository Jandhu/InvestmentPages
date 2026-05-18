document.addEventListener("DOMContentLoaded", function () {
    // 1. Define your pages here. Just add a new object to this array when you create a new page!
    const navigationLinks = [
        { name: "Home Dashboard", url: "index.html" },
        { name: "Combined Portfolio", url: "combined_portfolio.html" },
        { name: "S&P 500 Historical DCA", url: "sp500_historical_invest.html" }
        { name: "Rental Return Calculator", url: "rental_return_calculator.html" }
    ];

    // 2. Identify which page the user is currently looking at
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 3. Build the Tailwind-styled HTML string for the navigation bar
    let navbarHTML = `
    <nav class="bg-gray-800 border-b border-gray-700 shadow-md">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-2">
                    <span class="text-emerald-400 font-bold tracking-wider uppercase text-sm">Jandhu / InvestmentPages</span>
                </div>
                
                <div class="flex space-x-2">
    `;

    // Loop through the links array and apply active text/background styling based on the current page
    navigationLinks.forEach(link => {
        const isActive = currentPath === link.url;
        const baseClass = "px-3 py-2 rounded-xl text-sm font-medium transition duration-200";
        const activeClass = isActive 
            ? "bg-gray-900 text-emerald-400 font-semibold border border-gray-700" 
            : "text-gray-300 hover:bg-gray-750 hover:text-white";
        
        navbarHTML += `<a href="${link.url}" class="${baseClass} ${activeClass}">${link.name}</a>`;
    });

    navbarHTML += `
                </div>
            </div>
        </div>
    </nav>
    `;

    // 4. Inject the built navbar at the very top of the body
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
