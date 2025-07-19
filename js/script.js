// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function validateForm() {
    var name = document.getElementById("name-input").value;
    var tanggal = document.getElementById("tanggal").value;
    if (name != "" && tanggal != "") {
      document.getElementById("hasil").innerHTML = "Nama: " + name + "<br>Tanggal yang dipilih: " + tanggal;
    } else {
      document.getElementById("hasil").innerHTML = "Mohon isi semua field!";
    }
  }

