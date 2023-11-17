console.log("static JavaScript file!");

import("./dependent.js").then(imported => imported);
