const RoleModel = require("../models/role");

const createRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new RoleModel({
    role,
    permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "Role Created",
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

module.exports = { createRole };
