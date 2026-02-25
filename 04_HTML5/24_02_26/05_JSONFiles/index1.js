// ===============================
// Fake Database
// ===============================

let orders = [
  { id: 1, item: "Pizza" },
  { id: 2, item: "Burger" }
];

// Utility function to print orders
const printOrders = (title) => {
  console.log(`\n${title}`);
  orders.forEach(order =>
    console.log(`Order #${order.id} → ${order.item}`)
  );
};

// ===============================
// 1️⃣ CALLBACK VERSION
// ===============================

const addOrderCallback = (order, callback) => {
  setTimeout(() => {
    orders.push(order);
    callback();
  }, 1000);
};

const cancelOrderCallback = (callback) => {
  setTimeout(() => {
    orders.shift(); // remove first order
    callback();
  }, 1000);
};

// Run Callback Version
addOrderCallback({ id: 3, item: "Pasta" }, () => {
  printOrders("CALLBACK: Current Orders");

  cancelOrderCallback(() => {
    printOrders("CALLBACK: After Cancel");

    // ===============================
    // 2️⃣ PROMISE VERSION
    // ===============================

    const addOrderPromise = (order) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          orders.push(order);
          resolve();
        }, 1000);
      });
    };

    const cancelOrderPromise = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          orders.shift();
          resolve();
        }, 1000);
      });
    };

    addOrderPromise({ id: 4, item: "Sandwich" })
      .then(() => {
        printOrders("PROMISE: Current Orders");
        return cancelOrderPromise();
      })
      .then(() => {
        printOrders("PROMISE: After Cancel");

       

        const addOrderAsync = (order) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              orders.push(order);
              resolve();
            }, 1000);
          });
        };

        const cancelOrderAsync = () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              orders.shift();
              resolve();
            }, 1000);
          });
        };

        const runAsyncVersion = async () => {
          await addOrderAsync({ id: 5, item: "Ice Cream" });
          await addOrderAsync({ id: 6, item: "Cold Coffee" });

          printOrders("ASYNC/AWAIT: Current Orders");

          await cancelOrderAsync();

          printOrders("ASYNC/AWAIT: After Cancel");
        };

        runAsyncVersion();
      });
  });
});