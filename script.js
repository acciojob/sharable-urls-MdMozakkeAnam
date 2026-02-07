// your code here
document.getElementById("button").addEventListener("click", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const year = document.getElementById("year").value.trim();
    
    let baseUrl = "https://localhost:8080/";
    let queryParams = [];
    
    if (name !== "") {
        queryParams.push("name=" + encodeURIComponent(name));
    }
    if (year !== "") {
        queryParams.push("year=" + year);
    }
    
    const finalUrl = queryParams.length > 0 
        ? baseUrl + "?" + queryParams.join("&") 
        : baseUrl;
        
    document.getElementById("url").textContent = finalUrl;
});
