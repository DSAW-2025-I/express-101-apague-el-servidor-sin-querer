const express = require("express");
const app = express();
const port = 3000;

// Datos de los estudiantes
const students = {
  1: {
    name: "Juan",
    lastName: "Gómez",
    email: "juangomsaa@unisabana.edu.co",
    id: "320999",
  },
  2: {
    name: "Tomás",
    lastName: "Agudelo",
    email: "sergioagri@unisabana.edu.co",
    id: "167400",
  },
};
app.get("/user-info/:id", (req, res) => {
    console.log(`Petición recibida para ID: ${req.params.id}`);
    const studentId = req.params.id;
  
    if (students[studentId]) {
      res.json(students[studentId]);
    } else {
      res.status(404).json({ error: "Estudiante no encontrado" });
    }
  });
  


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});