var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
});

function submitData() {
  const formData = new FormData(document.getElementById("ExcelForm"));
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch(
    "https://script.google.com/macros/s/AKfycbwOCstOflHqyJ0QrpgUoem1eQtn9SPVzr5LKAVPF_hsiduX_z0ftjAbfx7rxEQHBOLM/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => response.json())
    .then((data) => alert("Data submitted successfully"))
    .catch((error) => console.error("Error:", error));
}
