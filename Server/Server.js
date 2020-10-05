const Shop = require('./Shop/Shop');
const AdminShop_Products = require('./Shop/Products_AdminShop');
const AdminShop_Clients = require('./Shop/Clients_AdminShop');

Shop.Start();
Shop.Shop();

AdminShop_Products.Server();
AdminShop_Clients.Server();
