var colors = require('colors');
const shop = require('./Shop');


//Admin
var Clients= [
    {
      ID: 1,
      Name: 'Albert',
      Image: 'Blob',
      Price: "Benavent",
      Cantidad: 3,
      Total: 45,
    },
    {
      ID: 2,
      Name: 'Juan',
      Image: 'Blob',
      Price: "Muñoz",
      Cantidad: 4,
      Total: 80,}
  ];


module.exports = {

Server: function(){

          //---ADMIN GESTION----//
          shop.app.put('/AdminShop/Client/GetClients', (req, res) => {
          console.table("Cargando Productos:");
          console.table(Clients);
          console.table(typeof Clients);
          res.send(JSON.stringify(Clients));
          res.end();
                  });

                  shop.app.put('/AdminShop/Client/AddClient', (req, res) => {
                  var Name=req.body.Name;
                  var Price=req.body.Price;
                  console.table("Añadiendo Cliente: " + Name + " / " + Price);
                  var NewProduct={
                    ID: 2,
                    Name: Name,
                    Image: 'Blob',
                    Price: Price,
                    Cantidad: 4,
                    Total: 80};


                  if(Clients[0]=="Vacio" || Clients[0]==undefined){
                    console.log("añadiendo primero");
                    Clients[0]= NewProduct;
                  }else{
                    Clients.push(NewProduct);
                  }

                  console.table(Clients);
                  //res.send([{Name: Name,Price: Price}]);
                  res.send(JSON.stringify(Clients));
                  res.end();
                                  });
          shop.app.put('/AdminShop/Client/EditClient', (req, res) => {
          var Name=req.body.Name;
          var Price=req.body.Price;
          var Position=req.body.Position;
          console.table("Editando Cliente: " + Name + " / " + Position);
                var NewProduct={
                  ID: 2,
                  Name: Name,
                  Image: 'Blob',
                  Price: Price,
                  Cantidad: 4,
                  Total: 80,
                  Position:Position};

          Clients[Position]=NewProduct;
          console.table(Clients);
          res.send(Clients);
          res.end();
    });
          shop.app.put('/AdminShop/Client/DeleteClient', (req, res) => {
          var Name=req.body.Name;
          var Price=req.body.Price;
          var Position=req.body.Position;

          Clients.splice(Position,1);
          console.table("Eliminando Cliente: " + Name + " / " + Price + "/ " + Position);
            console.table(Clients);
          if(Clients.length==0 || Clients.Name==undefined){
            Clients=["Vacio"];
          }
          console.table(Clients);
          res.send(JSON.stringify(Clients));
          res.end();
                          });




  },


};
