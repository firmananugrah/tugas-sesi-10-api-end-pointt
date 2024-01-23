const mahasiswaNim = "20220040038";
const updateData = {
  Nama: "Firman Anugrahr",
  Gender: "L",
  Prodi: "TI",
  Alamat: "Cibadak",
};

fetch("http://localhost:3000/mahasiswa/${mahasiswaNim}", {
  method: "PUT",
  headers: {
    "Content-Type": "Application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD POST
const newData = {
  nim: "20220040023",
  nama: "Gina",
  gender: "P",
  prodi: "TI",
  alamat: "sukabumi",
};

fetch("http://localhost:3000/mahasiswa", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nimToDelete = "2022004023";

fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// DOSEN
// METHOD PUT
const dosenNip = "10282314345";
const updatedDosenData = {
  nama: "Anggun",
  gender: "P",
  alamat: "cisaat",
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD POST
const newDosenData = {
  nip: "1028423823663",
  nama: "Somantri",
  gender: "L",
  alamat: "cibolang",
};

fetch("http://localhost:3000/dosen", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nipToDelete = "432";

fetch(`http://localhost:3000/dosen/${nipToDelete}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
