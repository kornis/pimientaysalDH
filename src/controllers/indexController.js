const controller = {
  home: (req, res) => {
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
    res.render("index", { productos: productos });
  },

  about: (req, res) => {
    res.send("acerca de nosotros");
  },
};

module.exports = controller;
