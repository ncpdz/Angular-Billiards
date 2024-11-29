const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const categoryRoutes = require("./routes/api/categoryRoutes");
const apiUserRoutes = require("./routes/api/userRoutes"); 
const apiCartRoutes = require("./routes/api/cartRoutes"); 
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./models/connectDB");
require("dotenv").config();
const apiProductRoutes = require("./routes/api/productRoutes");

const app = express();

const store = new SequelizeStore({
  db: sequelize,
});

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, 
  })
);

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "data:"],
        formAction: ["'self'", "http://localhost:3200", "http://localhost:4200/"],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https:", "'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(methodOverride("_method"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

store.sync();

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.static(path.join(__dirname, "public")));

// Đường dẫn API cho products, categories và users
app.use("/api/categories", categoryRoutes);
app.use("/api/products", apiProductRoutes);
app.use("/api/users", apiUserRoutes);
app.use("/api/cart", apiCartRoutes);

app.get("/", (req, res) => {
  res.redirect("/api/products");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3200;
const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}.`);
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});
