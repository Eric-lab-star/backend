import multer from "multer";

export const getHome = (req, res) => {
  return res.render("home");
};
export const postHome = (req, res) => {
  console.log(req.file);

  return res.send("postHome");
};

export const upload = multer({
  dest: "uploads/",
});
