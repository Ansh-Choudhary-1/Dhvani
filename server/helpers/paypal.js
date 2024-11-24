const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox',
  client_id: "AfPVAvO28smvRDYs6mOMFH5hFCCw5YggdEgArLo2pbKGen9dyuUJdSn5Pqncbz-cWGx7MSsh67xtu2is",
  client_secret: "AfPVAvO28smvRDYs6mOMFH5hFCCw5YggdEgArLo2pbKGen9dyuUJdSn5Pqncbz-cWGx7MSsh67xtu2is",
});

module.exports = paypal;
