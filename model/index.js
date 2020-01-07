const _ = require("../tools.js");

_.define(exports, "tools", _);
_.define(exports, "package", new WeakMap());

_.enumerate(exports, "IdentifierType", require("./IdentifierType"));
_.enumerate(exports, "Identifier", require("./Identifier"));
_.enumerate(exports, "Referable", require("./Referable"));
_.enumerate(exports, "AdministrativeInformation", require("./AdministrativeInformation"));
_.enumerate(exports, "Identifiable", require("./Identifiable"));

_.enumerate(exports, "Qualifier", require("./Qualifier"));
_.enumerate(exports, "Property", require("./Property"));
_.enumerate(exports, "Kind", require("./Kind"));
_.enumerate(exports, "Asset", require("./Asset"));
_.enumerate(exports, "View", require("./View"));
_.enumerate(exports, "Submodel", require("./Submodel"));
_.enumerate(exports, "SubmodelElement", require("./SubmodelElement"));
_.enumerate(exports, "ConceptDictionary", require("./ConceptDictionary"));
_.enumerate(exports, "ConceptDescription", require("./ConceptDescription"));
_.enumerate(exports, "AccessPermissionRule", require("./AccessPermissionRule"));
_.enumerate(exports, "AssetAdministrationShell", require("./AssetAdministrationShell"));

_.define(exports, "ready", true);