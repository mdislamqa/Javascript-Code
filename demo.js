
var assert=require('assert');


describe("Verify the login page", function(){
	it("Check the login credential is working correctly", function(done){

   
    browser.url('/');
    var title=browser.getTitle();
    assert.equal(title, 'Swag Labs');
    console.log('Title is ' + title);

    var username = $('#user-name');
    username.setValue('standard_user');

    var password = $('#password');
    password.setValue('secret_sauce');

    var loginbtn = $("//*[@class='btn_action']");
    loginbtn.click();


    
    
    });

});

describe("Verify the ability to add the item to the cart", function(){
	it("Adding items to the cart", function(done){

		var add1= $("//*[@class='inventory_item']/div[3]/button[@class='btn_primary btn_inventory'][1]");
		add1.click();

        var add2= $("/html//div[@id='inventory_container']/div/div[@id='inventory_container']/div/div[2]//button[.='ADD TO CART']");
		
		add2.click();
		

		//browser.pause(5000);
	});
});

describe("Verify the ability to open the cart", function(){
	it("Checking the cart and verify the items", function(done){

		var cart= $("//*[@id='shopping_cart_container']");
		cart.click();
		

	    
	});
});

describe("Verify the items", function(){
	it("Checking that shoppig cart stored correct item", function(done){

	   var first_item= $("#item_4_title_link");
	   var first= first_item.getText();
	   console.log("First item I selected " + first);
	   assert.equal(first, 'Sauce Labs Backpack');

	   var second_item= $("#item_0_title_link");
	   var second= second_item.getText();
	   console.log("Second item I selected " + second);
	   assert.equal(second, 'Sauce Labs Bike Light');
	});
});

describe("Verify the ability to remove an item from the cart", function(){
	it("Check the item is removed from the cart", function(done){

		var remove= $("//*[@class='cart_item']/div[2]/div[2]/button[@class='btn_secondary cart_button'][1]");
		remove.click();

		//browser.pause(5000);
	});
});
describe("Verify the ability to continue shoppig", function(){
	it("Click on Continue Shopping button", function(done){
		var continue_shopping= $("//*[@id='cart_contents_container']/div/div[2]/a[1]");
		continue_shopping.click();
		//browser.pause(3000);
	});
});

describe("Verify the ability to add another item", function(){
	it("Check the item is added to the cart", function(done){

		var add3= $("//*[@class='inventory_item']/div[3]/button[@class='btn_primary btn_inventory'][1]");
		add3.click();
	});
});

describe("Verify the ability to checkout", function(){
	it("Checking out all the items", function(done){

		var clickCart= $("//*[@id='shopping_cart_container']");
		clickCart.click();

		var checkout= $("//*[@id='cart_contents_container']/div/div[2]/a[2]");
		checkout.click();

		//browser.pause(5000);

		});
});

describe("Verify the ability to enter checkout information", function(){
	it("Enter the informations", function(done){

		var firstName= $('#first-name');
		firstName.setValue('MD');

		var lastName= $('#last-name');
		lastName.setValue('ISLAM');

		var postalCode= $('#postal-code');
		postalCode.setValue('11377');

		

		var clickContinue= $("//*[@class='checkout_buttons']/input");
		clickContinue.click();
		

	   });
       });

       describe("Verify the items and price",function(){
	   it("Checking the prices and click on finsh button", function(done){

		 var check_item1= $("#item_4_title_link");
	   var item1= check_item1.getText();
	   console.log("First item I selected " + item1);
	   assert.equal(item1, 'Sauce Labs Backpack');

	   var check_item2= $("#item_0_title_link");
	   var item2= check_item2.getText();
	   console.log("Second item I selected " + item2);
	   assert.equal(item2, 'Sauce Labs Bike Light');

	   var price_item1= $("//*[@class='cart_item_label']/div[text()='9.99']");
	    price_item1=parseFloat("9.99", $);   

	
	   console.log("The price of first item : $" + price_item1);

	    var price_item2= $("//*[@class='cart_item_label']/div[text()='29.99']");
	   var price_item2=parseFloat("29.99", $);
       console.log("The price of second item : $" +price_item2);

       var tax= $("//*[@class='summary_tax_label']");
       var tax=parseFloat("3.20", $);
       console.log("Tax :" + tax)
       var total= price_item1 + price_item2 + tax;
       console.log("Total price is :$" + total);

       assert.equal(total, '43.18');
       });
       });

       describe("Verify the ability to finish checkout", function(){
       	it("check that FINISH button is working properly", function(done){

       		var finish= $("//*[@class='cart_footer']/a[2]");
       		finish.click();
       		browser.pause(5000);
       	});
        });






	   

	   


	
		








































