// pega token da URL
const params = new URLSearchParams(window.location.search);
const token = params.get("token");

if (token) {
  localStorage.setItem("token", token);
}

// chamada protegida
function buscarDados() {
  fetch("http://localhost:3000/protegido", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("resultado").textContent =
      JSON.stringify(data, null, 2);
  });
}