from neo4j import GraphDatabase


class Graph:
    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()

    def execute_query(self, query, parameters=None):
        data = []
        with self.driver.session() as session:
            results = session.run(query, parameters)
            for record in results:
                data.append(record)
            return data

db = Graph(uri='bolt://3.219.237.135:7687', user='neo4j', password='competitions-belt-egg')

def resetDB():
    db.execute_query("MATCH (n) DETACH DELETE n")
    db.execute_query("CREATE (i:Instalador{nome:'Célio Do Carmo P.',cel:'222.333.111-00',endereco:'Rua 27',lat:'-22.2282414',long:'-45.7112536',star:'3'}) RETURN i")
    db.execute_query("CREATE (i:Instalador{nome:'Victor Júlio da S.',cel:'123.312.231-55',endereco:'Rua 28',lat:'-22.2583414',long:'-45.7070546',star:'5'}) RETURN i")
    db.execute_query("CREATE (p:Provedor{nome:'Vouy',endereco:'Rua da Vouy',lat:'-22.2482414',long:'-45.7068536',range:'1',color:'d0cb43'}) RETURN p")
    db.execute_query("CREATE (p:Provedor{nome:'Viasat',endereco:'Rua da Viasat',lat:'-22.256623',long:'-45.696074',range:'2',color:'43c2d0'}) RETURN p")
    db.execute_query("CREATE (p:Provedor{nome:'Vivox',endereco:'Rua da Vivox',lat:'-22.2572414',long:'-45.7010536',range:'1',color:'1f22d6'}) RETURN p")
    db.execute_query("CREATE (p:Plano{idPlan:'ECONÔMICO',upload:'1.5M',download:'10M',limite:'25Gb',valor:'75.00'}) RETURN p")
    db.execute_query("CREATE (p:Plano{idPlan:'SMART',upload:'3M',download:'15M',limite:'40Gb',valor:'100.00'}) RETURN p")
    db.execute_query("CREATE (p:Plano{idPlan:'PRIME',upload:'3M',download:'20M',limite:'80Gb',valor:'120.00'}) RETURN p")
    db.execute_query("CREATE (p:Plano{idPlan:'INFINITY',upload:'3',download:'30',limite:'120Gb',valor:'150.00'}) RETURN p")
    db.execute_query("MATCH (pr:Provedor{nome:'Viasat'}),(pl:Plano{idPlan:'ECONÔMICO'}) CREATE (pr)-[:POSSUI]->(pl)")
    db.execute_query("MATCH (pr:Provedor{nome:'Viasat'}),(pl:Plano{idPlan:'SMART'}) CREATE (pr)-[:POSSUI]->(pl)")
    db.execute_query("MATCH (pr:Provedor{nome:'Viasat'}),(pl:Plano{idPlan:'PRIME'}) CREATE (pr)-[:POSSUI]->(pl)")
    db.execute_query("MATCH (pr:Provedor{nome:'Viasat'}),(pl:Plano{idPlan:'INFINITY'}) CREATE (pr)-[:POSSUI]->(pl)")

resetDB()