const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "vGhZN-QYScSi9T7RqoKA-w",
    APISecret: "S8nynxymN59ZWPsOZg8HQz3ZmUp98ar0MW7o",
  },
  production: {
    APIKey: "vGhZN-QYScSi9T7RqoKA-w",
    APISecret: "S8nynxymN59ZWPsOZg8HQz3ZmUp98ar0MW7o",
  },
};

module.exports = config[env];
