
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("cornChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "CornToken (USD)",
        data: [0.1, 0.13, 0.18, 0.24, 0.32, 0.45],
        backgroundColor: "rgba(0, 200, 111, 0.2)",
        borderColor: "#00c86f",
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  document.getElementById("language-switcher").addEventListener("change", function () {
    alert("Language switching coming soon!");
  });
});
