const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

module.exports = db;

const Gardener = db.define("gardeners", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Plot = db.define("plots", {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const Vegetable = db.define("vegetables", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  color: {
    type: Sequelize.STRING,
    allowNull: false
  },

  planted_on: {
    type: Sequelize.DATE,
    allowNull: false
  }
});
//
// const VegePlot = db.define("vegetable_plot", {
//   vegetable_id: {
//     type: Sequelize.INTEGER
//   },
//
//   plot_id: {
//     type: Sequelize.INTEGER
//   }
// });

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });

// Plot.belongsTo(Gardener);
Gardener.belongsTo(Vegetable, { as: "favorite_vegetable" });
