var colors = require('colors');
const shop = require('./Shop');


//Admin
var Products= [
    {
      ID: 1,
      Name: 'Producto Test 1',
      Image: 'Blob',
      Price: 15,
      Cantidad: 3,
      Total: 45,
    },
    {
      ID: 2,
      Name: 'Producto Test 2',
      Image: 'Blob',
      Price: 20,
      Cantidad: 4,
      Total: 80,}
  ];


module.exports = {

Server: function(){
        //LoginAdmin
        shop.app.put('/AdminShop/LoginAdmin', (req, res) => {
            var Name=req.body.Name;
            var Password=req.body.Password;
            var Mensaje=["Error"];
                  if((Name=="Admin" || Name=="admin")&&( Password=="123") ){
                      console.table("Admin Ok");
                      Mensaje=["Ok"];
                  }
            res.send(Mensaje);
            res.end();
                });

          //---ADMIN GESTION----//
          shop.app.put('/AdminShop/Product/GetProducts', (req, res) => {
          console.table("Cargando Productos:");
          console.table(Products);
          console.table(typeof Products);
          res.send(JSON.stringify(Products));
          res.end();
                  });

                  shop.app.put('/AdminShop/Product/AddProduct', (req, res) => {
                  var Name=req.body.Name;
                  var Price=req.body.Price;
                  console.table("Añadiendo Producto: " + Name + " / " + Price);
                  var NewProduct={
                    ID: 2,
                    Name: Name,
                    Image: 'Blob',
                    Price: Price,
                    Cantidad: 4,
                    Total: 80};


                  if(Products[0]=="Vacio" || Products[0]==undefined){
                    console.log("añadiendo primero");
                    Products[0]= NewProduct;
                  }else{
                    Products.push(NewProduct);
                  }

                  console.table(Products);
                  //res.send([{Name: Name,Price: Price}]);
                  res.send(JSON.stringify(Products));
                  res.end();
                                  });
          shop.app.put('/AdminShop/Product/EditProduct', (req, res) => {
          var Name=req.body.Name;
          var Price=req.body.Price;
          var Position=req.body.Position;
          console.table("Editando Producto: " + Name + " / " + Position);
                var NewProduct={
                  ID: 2,
                  Name: Name,
                  Image: 'Blob',
                  Price: Price,
                  Cantidad: 4,
                  Total: 80,
                  Position:Position};

          Products[Position]=NewProduct;
          console.table(Products);
          res.send(Products);
          res.end();
    });
          shop.app.put('/AdminShop/Product/DeleteProduct', (req, res) => {
          var Name=req.body.Name;
          var Price=req.body.Price;
          var Position=req.body.Position;

          Products.splice(Position,1);
          console.table("Eliminando Producto: " + Name + " / " + Price + "/ " + Position);
            console.table(Products);
          if(Products.length==0 || Products.Name==undefined){
            Products=["Vacio"];
          }
          console.table(Products);
          res.send(JSON.stringify(Products));
          res.end();
                          });




  },


};
