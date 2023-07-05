import Sequelize from 'sequelize';

            
        const db = new Sequelize('redsale', 'root', '' , { host: 'localhost', dialect: 'mysql' });
        
        if(db){
            console.log("Database Connected Success");
        }else{
            console.log("Error al conectar con la Base de datos");
        }
    

    
export default db;