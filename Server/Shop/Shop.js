const express = require('express');
var app = module.exports = express();
app.use(express.json());
const path = require('path')
var colors = require('colors');

var N_Items=0;
var N_ItemsTotal=0;
var ProductList=[];
var TotalPrice=0;
module.exports.servidor = {
  Start: function() {
  const port=4000;
  app.listen(port,'0.0.0.0', () =>
   console.log('Express arrancado'.cyan));
  },

Shop: function(){

  function CostTotal(number){


      console.log("Calculando precio total: " + number);
      TotalPrice=0;
      for(var i=0;i<ProductList.length;i++){
        if(ProductList[i]!=null && ProductList[i].Total!=undefined ){
      console.log(ProductList[i].Total);
      TotalPrice=TotalPrice+ProductList[i].Total;
    }
      }
      return TotalPrice;


      }
//ServerGetItems
app.put('/Shop/ServerGetItems', (req, res) => {
console.log("------------".bgGreen);
//Añadir producto:
console.log("Añadiendo producto nuevo en la lista, Items: " + N_Items  + "".bgGreen);
var Product=req.body;
console.table(Product);
console.table(ProductList);
  if(ProductList[N_Items]==undefined){
    ProductList[N_Items] = {};
    }
//Recorre la lista de productos y comprueba la id. Si la id ya existe en la lista, añade cantidad a ese item.
//Si no lo esta, añade item nuevo en la lista:
      var check="no";
      if(ProductList.length>0){
      for(var i=0;i<ProductList.length;i++){
        //Esta en la lista y avisa cambiando el valor de check
        var ID=ProductList[i].ID;
        if(ID==undefined){ID=ProductList[i].id}
        console.log(ProductList[i].ID + "//" + i);
          if(ID==Product.id && Product.id!=undefined){
            console.log(("Producto del mismo tipo").bgCyan);

              ProductList[i].Cantidad=ProductList[i].Cantidad+1;
              console.log("Calculando el total: " + Product.Precio + "/" + ProductList[i].Cantidad );
              ProductList[i].Total=Product.Precio*ProductList[i].Cantidad;
              check=i;

              console.log(".....");
              console.log(ProductList[i].Nombre + " / " + ID);
      }}}
//No esta en la lista:
      if(check=="no"){
        console.log(("Añadiendo nuevo").bgRed);

        ProductList[N_Items].Precio=Product.Precio;
        ProductList[N_Items].Nombre=Product.Nombre;
        ProductList[N_Items].Image=Product.Image;
        ProductList[N_Items].Cantidad=1;
        ProductList[N_Items].ID=Product.id;
        ProductList[N_Items].Total=Product.Precio;
      N_Items=N_Items+1;

      }else{
        console.log("Añadida cantidad a producto existente");
      }
      N_ItemsTotal=N_ItemsTotal+1;
      console.log(("Numero total en el carrito:" + N_ItemsTotal).bgYellow);
        console.log(("Numero items totales en el carrito:" + N_Items).bgYellow);

      console.table(ProductList);



      var DataSend={};
      DataSend.Number=N_ItemsTotal;
      TotalPrice=CostTotal("4");
      DataSend.TotalPrice=TotalPrice;

      console.log("Enviando precio total: " + TotalPrice);
      res.send(DataSend);
      res.end();
      console.log("//////////////////".bgGreen);
});

//GetItems.js In Folder Services (Client)
app.put('/Shop/ClientGetItems', (req, res) => {
      console.log(("Cesta de compra del usuario:" + req.body.User).bgGreen);
      var Number=N_ItemsTotal.toString();
      var DataSend={};
      DataSend.Number=Number;
      DataSend.ProductList=ProductList;

      console.table(ProductList);
      TotalPrice=CostTotal("5");
      DataSend.TotalPrice=TotalPrice;
      res.send(DataSend);
      res.end();
        });

//LoginUser
app.put('/Shop/LoginUser', (req, res) => {
    console.log(("Usuario:" + req.body.User + " Logeado").bgGreen);
    res.send("Usuario conectado");
    res.end();
        });

//DeleteProduct
app.delete('/Shop/DeleteProduct', (req, res) => {
    console.log(("Eliminando Producto:").bgMagenta);
    var Product=req.body.Product;
    console.table(Product);
    var Position=Product.Product;
    var User=Product.User;
    var Price=Product.Price;
  console.table(ProductList);
    ProductList[Position].Cantidad=ProductList[Position].Cantidad-1;
  N_ItemsTotal=N_ItemsTotal-1;
          if(ProductList[Position].Cantidad==0){
            console.log("Cantidad 0");
          //  ProductList.splice(Position,1);
                    delete ProductList[Position];
                    N_Items=N_Items-1;

                }
          else{
            console.log("Cantidad !0");
                    console.log(Price + "/" + ProductList[Position].Cantidad );
                    ProductList[Position].Total=Price*ProductList[Position].Cantidad;


              }
      console.table(ProductList);
      var DataSend={};
      DataSend.Number=N_ItemsTotal;
      DataSend.ProductList=ProductList;
      TotalPrice=CostTotal("1");
      DataSend.TotalPrice=TotalPrice;

      res.send(DataSend);

      res.end();
        });

//AddProduct
app.put('/Shop/AddProduct', (req, res) => {

          console.log(("Usuario:" + req.body.User+ "").bgGray);
          var Product=req.body.Product;
          var Position=req.body.Position;
          console.table(Product);
          ProductList[Position].Cantidad=Product.Cantidad+1;
          ProductList[Position].Total=Product.Total;
          N_ItemsTotal=N_ItemsTotal+1;
          console.table(ProductList);
          var DataSend={};
          DataSend.Number=N_ItemsTotal;
          DataSend.ProductList=ProductList;
          TotalPrice=CostTotal("2");
          DataSend.TotalPrice=TotalPrice;
          res.send(DataSend);
          res.end();
  });
  },


};
