import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "~/types/main";

export const useProductStore = defineStore("product", {
  state: (): {
    products: Product[];
    searchQuery: string

  } => ({
    products: [],
    searchQuery: '',
  }),
  getters: {
    filterDataProduct: (state) => (id: number) => {
      return state.products.find((products) => products.id === id);
    },
  },
  actions: {
    async fetchDataProduct() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        this.products = response.data.products;
        console.log(this.products);
      } catch (error) {
        console.log("Error fetcing data", error);
      }
    },
    async searchProduct() {
      try {
        
        if(this.searchQuery !== ""){
          const response = await axios.post("https://dummyjson.com/products", {
            title: this.searchProduct
          })

          this.searchQuery = ''
        }
       
      } catch (error) {
        // console.log(error)
      }
    },
  },
});
