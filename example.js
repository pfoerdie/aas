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

let hello = AASfactory.Identifier({
    idType: "URI",
    id: "http:/localhost/hello_world"
});
console.log(hello);