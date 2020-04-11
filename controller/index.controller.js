 //const db = require('../connection');

const getUsers = async (req,res) =>{
    //const response = await db.query('select * from people');
    //console.log({response})
   //const response = [{age: '32', name: 'chica'}]
    //lo que se muestra en la consola
    //console.log(response.rows);
    //lo que se muestra en el explorador
    //res.send('users');
    //mostrar json en el explorador
  //  res.status(200).json(response.rows);
  res.status(200).json([{userName: 'chica', age: 'dejemoslo en que esta vieja'}])
}

module.exports ={
  getUsers
}
