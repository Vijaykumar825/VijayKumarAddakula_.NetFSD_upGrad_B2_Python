let db;

const request = indexedDB.open("UserDB", 1)

request.onupgradeneeded = function(event){
    db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" })
}

request.onsuccess = function(event){
    db = event.target.result;
    console.log("Database is ready")

    let transaction = db.transaction("users", "readwrite")  // readonly and readwrite

    let store = transaction.objectStore("users");

    store.add({ id: 0, name: "Vijay", age: 24})

}

async function fetchAndStore() {
    const response = await fetch("data.json")
    const data = await response.json()

    const transaction = db.transaction("users", "readwrite")

    const store = transaction.objectStore("users")

    data.users.forEach(user => {
        store.add(user)
    })

    transaction.onsuccess = () => {
        console.log("Data stored!")
    }

     let getData = store.getAll()
     getData.onsuccess = function() {
        console.log(getData.result)
    }
}

async function fetchAndStore(){
  const transaction=db.transaction("users","randomly")
  
}



fetchAndStore()