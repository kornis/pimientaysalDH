var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send("listado de productos");
});

router.get("/:plato", (req, res) => {
  const productos = [
    {
      nombrePlato: "Carpaccio fresco",
      descripcion: "Entrada Carpaccio de salmón con cítricos",
      precio: "U$S 65.50",
      descripcionDetallada: "Descripción detallada jasldaksjldjalsdjalskdjlk",
    },
    {
      nombrePlato: "Risotto de berenjena",
      descripcion: "Risotto de berenjena y queso de cabra",
      precio: "U$S 47.00",
      descripcionDetallada: "",
    },
    {
      nombrePlato: "Mousse de arroz",
      descripcion: "Mousse de arroz con leche y aroma de azahar",
      precio: "U$S 27.50",
      descripcionDetallada: "",
    },
    {
      nombrePlato: "Espárragos blancos",
      descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
      descripcionDetallada: "",
      precio: "U$S 65.50",
    },
  ];
  const plato = req.params.plato;
  let platoParaMostrar;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombrePlato == plato) {
      platoParaMostrar = productos[i];
    }
  }
  res.render("detalleMenu", { producto: platoParaMostrar });
});

module.exports = router;
