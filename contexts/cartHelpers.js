// export const addItem = (item = [], count = 0, next = (f) => f) => {
export const addItem = (item = [], count = 0) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        console.log('cart', cart)
        let found = false;
        if (cart.length !== 0) {
            cart.map((product, i) => {
                if (product.item === item) {
                    cart[i].count += count;
                    found = true;
                } 
            });
        } 
        if (!found){
            cart.push({
                item,
                count: count,
            });
        }
        
  
      // remove duplicates
      // build an Array from new Set and turn it back into array using Array.from
      // so that later we can re-map it
      // new set will only allow unique values in it
      // so pass the ids of each object/product
      // If the loop tries to add the same value again, it'll get ignored
      // ...with the array of ids we got on when first map() was used
      // run map() on it again and return the actual product from the cart
  
    //   cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
    //     return cart.find((p) => p._id === id);
    //   });
    
        localStorage.setItem('cart', JSON.stringify(cart));
    //   next();
    }
  };
  
  export const itemTotal = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart')).length;
      }
    }
    return 0;
  };
  
  export const getCart = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'));
      }
    }
    return [];
  };
  
  export const updateItem = (item, count) => {
    let cart = [];
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
  
      cart.map((product, i) => {
        if (product.item === item) {
          cart[i].count = count;
        }
      });
  
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  
  export const removeItem = (item) => {
    let cart = [];
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
      cart.map((product, i) => {
        if (product.item === item) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
  };
  
  export const emptyCart = (next) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
      next();
    }
  };
  