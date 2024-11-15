import axios from 'axios';
import {create} from 'zustand'

const useProductStore = create((set) => ({
    products: [],
    product:null,
    loading: false,
    error: null,
    
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://dummyjson.com/products");
            set({products:response.data.products,loading:false})
        } catch (error) {
            set({error:"Oops its us not you !",loading:false})
        }
    },

    fetchProduct: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            set({product:response.data,loading:false})
        } catch (error) {
            set({error:"Failed to fetch product",loading:false})
        }
    }

}))

export default useProductStore;