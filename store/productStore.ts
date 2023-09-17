  import { defineStore } from "pinia";
  import axios from "axios";
  import { Product } from "~/types/main";

  export const useProductStore = defineStore("product", {
    state: (): {
      products: Product[];
      searchProducts: string
    } => ({
      products: [],
      searchProducts: '',
    }),
    getters: {
      filterDataProduct: (state) => (id: number) => {
        return state.products.find((products) => products.id === id);
      },
      filteredProducts: (state) => {
        if(!state.searchProducts){
          return state.products
        }
        return state.products.filter((item) => {
          const product = item.title?.toLowerCase()
          return product?.match( state.searchProducts.toLowerCase())
        }
        )
      },
    },
    actions: {
      async fetchDataProduct() {
        try {
          const response = await axios.get("https://dummyjson.com/products");
          this.products = response.data.products;
          // console.log(this.products);
        } catch (error) {
          console.log("Error fetcing data", error);
        }
      },
      
      
    },
  });
