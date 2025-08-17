
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "ps-refrigeracion.firebaseapp.com",
    projectId: "ps-refrigeracion",
    storageBucket: "ps-refrigeracion.appspot.com",
    messagingSenderId: "339516215452",
    appId: "1:339516215452:web:f9ef77477273f636db9d59"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const contenedor = document.getElementById("opiniones-list");
  const q = query(collection(db, "reseñas"), orderBy("fecha", "desc"));

  onSnapshot(q, (snapshot) => {
    contenedor.innerHTML = "";
    snapshot.forEach((doc) => {
      const r = doc.data();
      const fecha = r.fecha?.toDate().toLocaleString() ?? "Sin fecha";
      contenedor.innerHTML += `
        <div class="resena">
          <strong>${r.nombre}</strong> — ⭐ ${r.rating}/5<br>
          <p>${r.texto}</p>
          <small>${fecha}</small>
          <hr>
        </div>
      `;
    });
  });


