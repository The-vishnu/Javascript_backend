import express from "express";
import { getAllQuotes } from "../controllers/quoteControllers.js";

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("login route is working ✅");
});

router.get("/quotes", getAllQuotes);

// router.get("/quotes/:id", (req, res) =>{
//     const id = req.params.id;
//     res.send(getAllQuotes.id);
// });
export default router;