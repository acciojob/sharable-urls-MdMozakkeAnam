// your code here
 <script>
    document.getElementById("button").addEventListener("click", function() {
      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();

      let baseUrl = "https://localhost:8080/";

      // Build the query string dynamically
      let params = [];
      if (name) params.push("name=" + encodeURIComponent(name));
      if (year) params.push("year=" + encodeURIComponent(year));

      // Update the URL text
      const finalUrl = params.length ? baseUrl + "?" + params.join("&") : baseUrl;
      document.getElementById("url").innerText = finalUrl;
    });
  </script>