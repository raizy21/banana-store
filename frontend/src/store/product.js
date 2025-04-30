import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "please fill all fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({
      products: [...state.products, data.data],
    }));
    return {
      success: true,
      message: "product created successfully",
    };
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (pid) => {
    if (!pid || pid === ":" || typeof pid !== "string") {
      console.error("invalid product ID passed to deleteProduct:", pid);
      return { success: false, message: "Invalid product ID" };
    }

    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));

    return {
      success: true,
      message: "product deleted successfully",
    };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }

    //update the ui immediately, without needing to refetch the data
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return {
      success: true,
      message: "product updated successfully",
    };
  },
}));
