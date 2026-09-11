import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set)=>({
        cart:[],
        addToCart:(product)=>{
            set((state)=>{
                const exist = state.cart.find(item => item.id === product.id);
                if(exist){
                    return ({cart:state.cart.map(e => e.id === exist.id ? ({...e,quantity:e.quantity+1}): e )})
                }else{
                    return({cart:[...state.cart,{...product,quantity:1}]})
                }
            })
        },
        removeFromCart:(productId)=>{
            set((state)=>{
               return ({cart:state.cart.filter(item => item.id !== productId)})
            })
        },
        increaseQuantity:(productId)=>{
            set((state)=>{
                return({cart:state.cart.map(e => e.id === productId ? ({...e,quantity:e.quantity+1}): e )})
            })
        },
        decreaseQuantity:(productId)=>{
            set((state)=>{
                const exist = state.cart.find(item => item.id === productId);
                if(exist){
                    const quantity = exist.quantity;
                    if(quantity>1){
                        return({cart:state.cart.map(e => e.id === productId ? ({...e,quantity:e.quantity-1}):e)})
                    }else{
                        return({cart:state.cart.filter(e => e.id !== productId)})
                    }
                }
            })
        },
        wishlist:[],
        handleWishlist:(productId)=>{
            set((state)=>{
                const exist = state.wishlist.includes(productId);
                if(exist){
                    return ({wishlist:state.wishlist.filter(item => item !== productId)})
                }else{
                    return({wishlist:[...state.wishlist,productId]})
                }
            })
        }
    }),
    {
        name:'data' , partialize: (state) =>({cart:state.cart,wishlist:state.wishlist}) 
    }
    )
);
export default useStore;