import { defineStore } from "pinia";
import axios from "axios";
import { Cart, CartProducts, Product } from "~/types/main";

export const useCartStore = defineStore("cart", {
  state: () => ({
    initialCart: {} as Cart,
    cart: null as Cart | null,
  }),
  getters: {
    getAllCarts: (state) => {
      return { ...state.initialCart, ...state.cart };
    },
  },
  actions: {
    async getCartProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/carts/1");
        this.initialCart = response.data;
        console.log(response.data);
      } catch (error) {}
    },
    async addItemProducts(productData: Product, cardId: number) {
      try {
        console.log(productData);
        if (this.cart === null) {
          this.cart = { ...this.initialCart };
        }

        console.log(this.cart);
        function convertToCartProduct(
          productData: Product,
          quantity: number
        ): CartProducts {
          return {
            id: productData.id,
            title: productData.title,
            price: productData.price,
            total: productData.price,
            quantity: quantity,
          };
        }

        const cartDataProduct: CartProducts = convertToCartProduct(
          productData,
          1
        );

        const checkedProducts = this.cart.products.findIndex(
          (item) => item.id === cartDataProduct.id
        );
        if (checkedProducts !== -1) {
          this.cart.products[checkedProducts].quantity +=
            cartDataProduct.quantity;
        } else {
          this.cart.products.push(cartDataProduct);
        }

        const response = await axios.put(
          `https://dummyjson.com/carts/${cardId}`,
          {
            products: this.cart.products,
          }
        );

        if (response.status === 200) {
          this.cart = response.data;
        }
        console.log(this.cart);
      } catch (error) {}
    },
    async deleteItemProduct(id: number) {
      try {
        if (this.cart === null) {
          this.cart = { ...this.initialCart };
        }
        console.log(this.cart?.products)
        const filterRemoveData = this.cart?.products.filter((item) => item.id !== id);
        console.log(filterRemoveData)
        const response = await axios.put("https://dummyjson.com/carts/1", {
          products: filterRemoveData
        });
        this.cart = response.data
      } catch (error) {}
    },
  },
  // async deleteItemProduct(id:number) {
  //   try {
  //     // const filterRemoveData = this.product.filter((item) => item.id !== id)
  //     // const response = await axios.put("https://dummyjson.com/carts/1");
  //   } catch (error) {

  // }
});
