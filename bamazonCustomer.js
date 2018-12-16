var mySQL = require ('mysql');
var inquirer = require("inquirer");

var connection =mySQL.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'bamazon' 
})

connection.connect(function(error){
if (error) throw error 
    queryItems();
});

function queryItems () {
connection.query('select * from PRODUCTS;', function(error,results){
    if (error){
        console.log(error);
    }

    for (var i=0; i< results.length; i++){
    console.log(results[i].item_id + " " + "|"+ results[i].product_name + " " + " " + " " + " "+ " "+ "|"+ results[i].department_name + " " +" " + "|"+  results[i].price + " " +  " " + " " + " "+ "|"+  results[i].stock_quantity);
    }

});
}

// Create a "Prompt" with a series of questions.
function checkProduct (){
inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What product would you like to buy?",
      name: "productName"
    },
   
    {
        type: "input",
        message: "how many units of the product would you like to buy?",
        name: "productNumber"
      },

  ])

  .then(function(inquirerResponse) {
      var item1= inquirerResponse.productName;
      var quantity1= parseInt(inquirerResponse.productNumber);

      console.log(item1);
      console.log(quantity1);

      connection.query("SELECT * FROM PRODUCTS WHERE ?", [{item_id: item1}],
      function (err, response){

          
        if (err) throw err; 
      
        // If the inquirerResponse confirms, we display the inquirerResponse username from the answers.
        var productResponse= response[0];
        // var stockQuantity= productResponse.stock_quantity;

        // console.log("SQ: " + productResponse.stock_quantity);

        if (quantity1 <= productResponse.stock_quantity){

            // console.log("Product in stock");

        
            connection.query ("UPDATE PRODUCTS SET stock_quantity = stock_quantity - ? WHERE item_id =?",[quantity1, item1] , function(err, res){
                if (err) {
                    console.log(err.stafck);
                }

            console.log(res)

            // console.log("you've purchased a great item!")
            queryItems();

            });

           
                // when finished prompting, insert a new item into the db with that info
                // connection.query(
                //   "INSERT INTO PRODUCTS SET ?",

                //   {
                //     stock_quantity: answer.newQuantity,
       
                //   },
                //   function(err) {
                //     if (err) throw err;
                //     console.log("ERROR");
                //   }
                // );
             

        
        
    
    // (inquirerResponse.productName){
    //     
    // }
    // if (inquirerResponse.productNumber){
    //     console.log(input);
    // }

    // else {
    //     console.log("Insufficient quantity!")
    // }
}
      });
  });
}

checkProduct();



