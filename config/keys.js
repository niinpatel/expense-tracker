module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/expense-track",
  secretOrKey: process.env.SECRET || "secret",
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_SECRET,
  port: process.env.PORT || 5000
};
