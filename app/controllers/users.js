module.exports = {
  whoami: function (req, res) {
    const { user } = req;
    return res.status(200).json({
      status: "success",
      message: { user },
    });
  },
};
