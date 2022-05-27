"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signContract = exports.populateDB = exports.getProviderInRange2 = exports.relationshipClientInstaller = exports.relationshipClientPlan = exports.relationshipProviderPlan = exports.createInstaller = exports.createPlan = exports.createProvider = exports.createClient = exports.deleteAll = void 0;
const neo4j_driver_1 = __importDefault(require("neo4j-driver"));
const driver = neo4j_driver_1.default.driver("bolt://54.236.32.225:7687", neo4j_driver_1.default.auth.basic("neo4j", "diagnoses-circumstance-representatives"));
function runDB(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = driver.session();
        const response = yield session.run(query.toString());
        const records = response.records.map((record) => {
            return record.toObject();
        });
        driver.close();
        return {
            statuescode: 200,
            body: records[0]
        };
    });
}
function runDBMlti(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = driver.session();
        const response = yield session.run(query.toString());
        const records = response.records.map((record) => {
            return record.toObject();
        });
        driver.close();
        return {
            statuescode: 200,
            body: records
        };
    });
}
function deleteAll() {
    var query = "MATCH (n) DETACH DELETE n";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.deleteAll = deleteAll;
function createClient(name, cpf, cel, endereco, lat, long) {
    var q_name = "nome:'" + name + "'";
    var q_cpf = "cpf:'" + cpf + "'";
    var q_cel = "cel:'" + cel + "'";
    var q_endereco = "endereco:'" + endereco + "'";
    var q_lat = "lat:'" + lat + "'";
    var q_long = "long:'" + long + "'";
    var query = "CREATE (c:Cliente{" + q_name + "," + q_cpf + "," + q_cel + "," + q_endereco + "," + q_lat + "," + q_long + "}) RETURN c";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.createClient = createClient;
function createProvider(name, endereco, lat, long, range, color) {
    var q_name = "nome:'" + name + "'";
    var q_endereco = "endereco:'" + endereco + "'";
    var q_lat = "lat:'" + lat + "'";
    var q_long = "long:'" + long + "'";
    var q_range = "range:'" + range + "'";
    var q_color = "color:'" + color + "'";
    var query = "CREATE (p:Provedor{" + q_name + "," + q_endereco + "," + q_lat + "," + q_long + "," + q_range + "," + q_color + "}) RETURN p";
    console.log("Creating: " + query);
    runDB(query);
    return {
        statuescode: 200
    };
}
exports.createProvider = createProvider;
function createPlan(id, up, down, limit, value) {
    var q_up = "upload:'" + up + "'";
    var q_id = "idPlan:'" + id + "'";
    var q_down = "download:'" + down + "'";
    var q_limit = "limite:'" + limit + "'";
    var q_value = "valor:'" + value + "'";
    var query = "CREATE (p:Plano{" + q_id + "," + q_up + "," + q_down + "," + q_limit + "," + q_value + "}) RETURN p";
    console.log("Creating: " + query);
    runDB(query);
    return {
        statuescode: 200
    };
}
exports.createPlan = createPlan;
function createInstaller(name, cel, endereco, lat, long, star) {
    var q_name = "nome:'" + name + "'";
    var q_cel = "cel:'" + cel + "'";
    var q_endereco = "endereco:'" + endereco + "'";
    var q_lat = "lat:'" + lat + "'";
    var q_long = "long:'" + long + "'";
    var q_star = "star:'" + star + "'";
    var query = "CREATE (i:Instalador{" + q_name + "," + q_cel + "," + q_endereco + "," + q_lat + "," + q_long + "," + q_star + "}) RETURN i";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.createInstaller = createInstaller;
function relationshipProviderPlan(providerName, planId) {
    var q_pName = "nome:'" + providerName + "'";
    var q_pId = "idPlan:'" + planId + "'";
    var query = "MATCH (pr:Provedor{" + q_pName + "}),(pl:Plano{" + q_pId + "}) CREATE (pr)-[:POSSUI]->(pl)";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.relationshipProviderPlan = relationshipProviderPlan;
function relationshipClientPlan(clientName, planId) {
    var q_cName = "nome:'" + clientName + "'";
    var q_pId = "idPlan:'" + planId + "'";
    var query = "MATCH (c:Cliente{" + q_cName + "}),(pl:Plano{" + q_pId + "}) CREATE (c)-[:ALUGA]->(pl)";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.relationshipClientPlan = relationshipClientPlan;
function relationshipClientInstaller(clientName, InstallerName) {
    var q_cName = "nome:'" + clientName + "'";
    var q_iName = "nome:'" + InstallerName + "'";
    var query = "MATCH (c:Cliente{" + q_cName + "}),(i:Instalador{" + q_iName + "}) CREATE (c)-[:CONTRATA]->(i)";
    console.log("Creating: " + query);
    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    };
}
exports.relationshipClientInstaller = relationshipClientInstaller;
function getClient(clientName) {
    return __awaiter(this, void 0, void 0, function* () {
        var q_cName = "nome:'" + clientName + "'";
        var query = "MATCH (c:Cliente{" + q_cName + "}) RETURN c";
        console.log("Creating: " + query);
        var response = yield runDB(query);
        console.log(response.body.c.properties);
        return response;
    });
}
function getProvider(providerName) {
    return __awaiter(this, void 0, void 0, function* () {
        var q_pName = "nome:'" + providerName + "'";
        var query = "MATCH (p:Provedor{" + q_pName + "}) RETURN p";
        console.log("Creating: " + query);
        var response = yield runDB(query);
        return response;
    });
}
function getPlan(planId) {
    return __awaiter(this, void 0, void 0, function* () {
        var q_pId = "idPlan:'" + planId + "'";
        var query = "MATCH (p:Plano{" + q_pId + "}) RETURN p";
        console.log("Creating: " + query);
        var response = yield runDB(query);
        console.log(response.body.p.properties);
        return response;
    });
}
function getInstaller(instName) {
    return __awaiter(this, void 0, void 0, function* () {
        var q_iName = "nome:'" + instName + "'";
        var query = "MATCH (i:Instalador{" + q_iName + "}) RETURN i";
        console.log("Creating: " + query);
        var response = yield runDB(query);
        console.log(response.body.i.properties);
        return response;
    });
}
function getProviderInRange(cName) {
    return __awaiter(this, void 0, void 0, function* () {
        var q_cName = "nome:'" + cName + "'";
        var query = "MATCH (p:Provedor),(c:Cliente{" + q_cName + "})" +
            " WITH point({longitude: toFloat(p.lat), latitude: toFloat(p.long)}) as p1, point({longitude: toFloat(c.lat), latitude: toFloat(c.long)}) as p2," +
            " COLLECT(p.nome) as nome, COLLECT(p.range) as range, COLLECT(p.long) as long, COLLECT(p.lat) as lat, COLLECT(p.color) as color " +
            "RETURN nome, range, lat, long, color, point.distance(p1,p2) as dist";
        var response = yield runDBMlti(query);
        var providersList = [];
        for (var i = 0; i < response.body.length; i++) {
            var range = Number(response.body[i].range[0]);
            if (range * 1000 >= response.body[i].dist) {
                var provName = response.body[i].nome[0];
                var provRange = response.body[i].range[0];
                var provLat = response.body[i].lat[0];
                var provLong = response.body[i].long[0];
                var provColor = response.body[i].color[0];
                let dict = {
                    "nome": provName,
                    "range": provRange,
                    "lat": provLat,
                    "long": provLong,
                    "color": provColor
                };
                providersList = providersList.concat(dict);
            }
        }
        console.log(providersList);
        return providersList;
    });
}
function getProviderInRange2(cName) {
    let providersList = [{
            "nome": "Viasat",
            "range": "2",
            "lat": "-22.256623",
            "long": "-45.696074",
            "color": "43c2d033"
        },
        {
            "nome": "Vouy",
            "range": "1",
            "lat": "-22.2482414",
            "long": "-45.7068700",
            "color": "d0cb4333"
        },
        {
            "nome": "User",
            "range": "0.01",
            "lat": "-22.2552414",
            "long": "-45.7068700",
            "color": "d0cb4333"
        }];
    return providersList;
}
exports.getProviderInRange2 = getProviderInRange2;
function populateDB() {
    createClient("Usuario", "523.631.636-39", "(35)9.7278-7442", "Rua do suario", "-22.2582414", "-45.7070536");
    createInstaller("Ana Júlia C.", "000.111.222-33", "Rua 25", "-22.2682414", "-45.7110536", "4");
    createInstaller("Carlos Almeida A.", "000.222.333-11", "Rua 26", "-22.2619414", "-46.7110536", "5");
    createInstaller("Célio Do Carmo P.", "222.333.111-00", "Rua 27", "-22.2282414", "-45.7112536", "3");
    createInstaller("Victor Júlio da S.", "123.312.231-55", "Rua 28", "-22.2583414", "-45.7070546", "5");
    createProvider("Vouy", "Rua da Vouy", "-22.2482414", "-45.7068536", "1", "d0cb43");
    createProvider("Viasat", "Rua da Viasat", "-22.256623", "-45.696074", "2", "43c2d0");
    createProvider("Vivox", "Rua da Vivox", "-22.2572414", "-45.7010536", "1", "1f22d6");
    createPlan("ECONÔMICO", "1.5M", "10M", "25Gb", "75.00");
    createPlan("SMART", "3M", "15M", "40Gb", "100.00");
    createPlan("PRIME", "3M", "20M", "80Gb", "120.00");
    createPlan("INFINITY", "3", "30", "120Gb", "150.00");
}
exports.populateDB = populateDB;
function signContract() {
    relationshipClientPlan("Usuario", "PRIME");
    relationshipClientInstaller("Usuario", "Victor Júlio da S.");
}
exports.signContract = signContract;
console.log("Start");
