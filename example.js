const AAS = require(".");

let helloID = new AAS.Identifiable({
    idShort: "hello_world",
    identification: new AAS.Identifier({
        id: "http://localhost/hello_world",
        idType: AAS.IdentifierType.URI
    })
});

console.log(JSON.stringify(helloID, null, 2));