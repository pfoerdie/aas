// const AAS = require(".");
// console.log(AAS);

// let helloID = new AAS.Identifiable({
//     idShort: "hello_world",
//     identification: new AAS.Identifier({
//         id: "http://localhost/hello_world",
//         idType: AAS.IdentifierType.URI
//     })
// });

// console.log(JSON.stringify(helloID, null, 2));

const AASfactory = require("./factory");
// console.warn(AASfactory);

// let hello = AASfactory.Identifier({
//     idType: "URI",
//     id: "http:/localhost/hello_world"
// });
let hello = AASfactory.Asset({
    idShort: "hello_world",
    category: "test",
    administration: {
        version: "0.1.0",
        revision: ""
    },
    identification: {
        id: "http://localhost/hello_world",
        idType: "URI"
    }
});
console.log(hello);