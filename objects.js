let menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === "string"){
        return this._meal = mealToCheck;
      }else{
        return "Wrong input!"
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === "number"){
        return this._price = priceToCheck;
      }else{
        return "Wrong input!"
      }
    },
    get todaysSpecial(){
      if(this._meal && this._price){
        return "Today's Special is " + this._meal + " for $" + this._price + "!";
      }else{
        return "Meal or price was not set correctly!"
      }
    }
  };
  
  menu.meal = "Kebab";
  menu.price = 5;
  console.log(menu);
  console.log(menu.todaysSpecial)