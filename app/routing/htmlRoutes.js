

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  