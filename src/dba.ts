import neo4j from "neo4j-driver";

const driver = neo4j.driver("bolt://54.236.32.225:7687", neo4j.auth.basic("neo4j", "diagnoses-circumstance-representatives"))

async function runDB (query:any) {

    const session = driver.session();
    const response = await session.run(query.toString());

    const records = response.records.map((record:any) => {
        return record.toObject();
    })

    driver.close();
    return {
        statuescode: 200,
        body: records[0]
    }

}

async function runDBMlti (query:any) {

    const session = driver.session();
    const response = await session.run(query.toString());

    const records = response.records.map((record:any) => {
        return record.toObject();
    })

    driver.close();
    return {
        statuescode: 200,
        body: records
    }

}

// Deletar tudo
export function deleteAll() {

    var query:string = "MATCH (n) DETACH DELETE n";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}

// Criar um cliente, necessário: nome, cpf, celular, endereco, latitude e longitude
export function createClient(name:string, cpf:string, cel:string, endereco:string,  lat:string, long:string){

    var q_name:string = "nome:'"+name+"'";
    var q_cpf:string = "cpf:'"+cpf+"'";
    var q_cel:string = "cel:'"+cel+"'";
    var q_endereco:string = "endereco:'"+endereco+"'";
    var q_lat:string = "lat:'"+lat+"'"; 
    var q_long:string = "long:'"+long+"'"; 

    var query:string = "CREATE (c:Cliente{"+q_name+","+q_cpf+","+q_cel+","+q_endereco+","+q_lat+","+q_long+"}) RETURN c";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}

// Criar provedor, nome, endereco, latitute, longitude e raio de ação
export function createProvider (name:string, endereco:string,  lat:string, long:string, range:string, color:string){

    var q_name:string = "nome:'"+name+"'";
    var q_endereco:string = "endereco:'"+endereco+"'";
    var q_lat:string = "lat:'"+lat+"'"; 
    var q_long:string = "long:'"+long+"'"; 
    var q_range:string = "range:'"+range+"'"; 
    var q_color:string = "color:'"+color+"'"; 

    var query:string = "CREATE (p:Provedor{"+q_name+","+q_endereco+","+q_lat+","+q_long+","+q_range+","+q_color+"}) RETURN p";
    console.log("Creating: "+ query)
    
    runDB(query);
    return {
        statuescode: 200
    }
}

// Criar plano, id, upload, download, limite e valor
export function createPlan(id:string, up:string, down:string,  limit:string, value:string){

    var q_up:string = "upload:'"+up+"'";
    var q_id:string = "idPlan:'"+id+"'";
    var q_down:string = "download:'"+down+"'";
    var q_limit:string = "limite:'"+limit+"'"; 
    var q_value:string = "valor:'"+value+"'"; 

    var query:string = "CREATE (p:Plano{"+q_id+","+q_up+","+q_down+","+q_limit+","+q_value+"}) RETURN p";
    console.log("Creating: "+ query)
    
    runDB(query);
    return {
        statuescode: 200
    }
}

// Criar um instalador, necessário: nome, cpf, celular, endereco, latitude e longitude
export function createInstaller(name:string, cel:string, endereco:string,  lat:string, long:string, star:string){

    var q_name:string = "nome:'"+name+"'";
    var q_cel:string = "cel:'"+cel+"'";
    var q_endereco:string = "endereco:'"+endereco+"'";
    var q_lat:string = "lat:'"+lat+"'"; 
    var q_long:string = "long:'"+long+"'"; 
    var q_star:string = "star:'"+star+"'";

    var query:string = "CREATE (i:Instalador{"+q_name+","+q_cel+","+q_endereco+","+q_lat+","+q_long+","+q_star+"}) RETURN i";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}


// Criar relação Provedor - Plano
export function relationshipProviderPlan(providerName:string, planId:string){

    var q_pName:string = "nome:'"+providerName+"'";
    var q_pId:string = "idPlan:'"+planId+"'";

    var query:string = "MATCH (pr:Provedor{"+q_pName+"}),(pl:Plano{"+q_pId+"}) CREATE (pr)-[:POSSUI]->(pl)";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}

// Criar relação Cliente - Plano
export function relationshipClientPlan(clientName:string, planId:string) {

    var q_cName:string = "nome:'"+clientName+"'";
    var q_pId:string = "idPlan:'"+planId+"'";

    var query:string = "MATCH (c:Cliente{"+q_cName+"}),(pl:Plano{"+q_pId+"}) CREATE (c)-[:ALUGA]->(pl)";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}

// Criar relação Cliente - Instalador
export function relationshipClientInstaller(clientName:string, InstallerName:string) {

    var q_cName:string = "nome:'"+clientName+"'";
    var q_iName:string = "nome:'"+InstallerName+"'";

    var query:string = "MATCH (c:Cliente{"+q_cName+"}),(i:Instalador{"+q_iName+"}) CREATE (c)-[:CONTRATA]->(i)";
    console.log("Creating: "+ query)

    var response = runDB(query);
    return {
        statuescode: 200,
        body: response
    }
}

// Buscar cliente pelo nome
async function getClient(clientName:string) {

    var q_cName:string = "nome:'"+clientName+"'";

    var query:string = "MATCH (c:Cliente{"+q_cName+"}) RETURN c";
    console.log("Creating: "+ query)

    var response = await runDB(query);
    console.log(response.body.c.properties);
    return response
}

// Buscar provedor pelo nome
async function getProvider(providerName:string) {

    var q_pName:string = "nome:'"+providerName+"'";

    var query:string = "MATCH (p:Provedor{"+q_pName+"}) RETURN p";
    console.log("Creating: "+ query)

    var response = await runDB(query);

    return response
}

// Buscar plano pelo id
async function getPlan(planId:string) {

    var q_pId:string = "idPlan:'"+planId+"'";

    var query:string = "MATCH (p:Plano{"+q_pId+"}) RETURN p";
    console.log("Creating: "+ query)

    var response = await runDB(query);
    console.log(response.body.p.properties)
    return response

}

// Buscar instalador pelo nome
async function getInstaller(instName:string) {

    var q_iName:string = "nome:'"+instName+"'";

    var query:string = "MATCH (i:Instalador{"+q_iName+"}) RETURN i";
    console.log("Creating: "+ query)

    var response = await runDB(query);
    console.log(response.body.i.properties)
    return response
}

// Devolver todos os provedores onde o cliente esteja no seu raio de alcance
async function getProviderInRange(cName: string){
    
    var q_cName:string = "nome:'"+cName+"'";

    var query:string = "MATCH (p:Provedor),(c:Cliente{"+q_cName+"})" +
    " WITH point({longitude: toFloat(p.lat), latitude: toFloat(p.long)}) as p1, point({longitude: toFloat(c.lat), latitude: toFloat(c.long)}) as p2,"+
    " COLLECT(p.nome) as nome, COLLECT(p.range) as range, COLLECT(p.long) as long, COLLECT(p.lat) as lat, COLLECT(p.color) as color "+
    "RETURN nome, range, lat, long, color, point.distance(p1,p2) as dist"

    var response = await runDBMlti(query)
    var providersList:any = [];

    for (var i = 0; i < response.body.length; i++){

        var range = Number(response.body[i].range[0]);

        if(range*1000 >= response.body[i].dist){
            var provName = response.body[i].nome[0]
            var provRange = response.body[i].range[0]
            var provLat = response.body[i].lat[0]
            var provLong = response.body[i].long[0]
            var provColor = response.body[i].color[0]

            let dict = {
                "nome": provName,
                "range": provRange,
                "lat": provLat,
                "long": provLong,
                "color": provColor
            }

            providersList = providersList.concat(dict);
        }

    }
    console.log(providersList);
    return providersList;
}

export function getProviderInRange2(cName: string){
    
    
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
    }]

    return providersList;
}


// Povoar db
export function populateDB () {

    createClient("Usuario", "523.631.636-39", "(35)9.7278-7442", "Rua do suario","-22.2582414", "-45.7070536");

    createInstaller("Ana Júlia C.", "000.111.222-33", "Rua 25", "-22.2682414", "-45.7110536", "4");
    createInstaller("Carlos Almeida A.", "000.222.333-11", "Rua 26", "-22.2619414", "-46.7110536", "5");
    createInstaller("Célio Do Carmo P.", "222.333.111-00", "Rua 27", "-22.2282414", "-45.7112536", "3");
    createInstaller("Victor Júlio da S.", "123.312.231-55", "Rua 28", "-22.2583414", "-45.7070546", "5");

    createProvider("Vouy", "Rua da Vouy", "-22.2482414", "-45.7068536", "1", "d0cb43");
    createProvider("Viasat", "Rua da Viasat", "-22.256623", "-45.696074", "2", "43c2d0")
    createProvider("Vivox", "Rua da Vivox", "-22.2572414", "-45.7010536", "1", "1f22d6");

    createPlan("ECONÔMICO", "1.5M", "10M", "25Gb", "75.00");
    createPlan("SMART", "3M", "15M", "40Gb", "100.00");
    createPlan("PRIME", "3M", "20M", "80Gb", "120.00");
    createPlan("INFINITY", "3", "30", "120Gb", "150.00");
}

// Gerar relação fictícia entre o usuário, o plano e o instalador
export function signContract(){
    relationshipClientPlan("Usuario", "PRIME")
    relationshipClientInstaller("Usuario", "Victor Júlio da S.")
}

// populateDB();

// relationshipProviderPlan("Viasat", "ECONÔMICO")
// relationshipProviderPlan("Viasat", "SMART")
// relationshipProviderPlan("Viasat", "PRIME")
// relationshipProviderPlan("Viasat", "INFINITY")



console.log("Start");
// signContract();
// getProviderInRange("Usuario");
