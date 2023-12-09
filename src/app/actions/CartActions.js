import {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL,
  CART_ITEM_ADD_FAIL,
  CART_ITEM_ADD_REQUEST,
  CART_ITEM_ADD_SUCCESS,
  CART_ITEM_REMOVE_REQUEST,
  CART_ITEM_REMOVE_SUCCESS,
  CART_ITEM_REMOVE_FAIL,
  CART_ITEM_UPDATE_REQUEST,
  CART_ITEM_UPDATE_SUCCESS,
  CART_ITEM_UPDATE_FAIL,
} from "../constants/CartConstants";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { showSuccessAlert, showErrorAlert } from "./AlertActions";

export const listCartItems = () => async (dispatch) => {
  let cartData = [];
  async function getCartItems(db) {
    const cartCol = collection(db, "cartItems");
    const cartSnapshot = await getDocs(cartCol);
    const cartList = cartSnapshot.docs.map((doc) => doc.data());
    return cartList;
  }
  try {
    cartData = await getCartItems(db);

    dispatch({ type: CART_LIST_REQUEST });

    dispatch({ type: CART_LIST_SUCCESS, payload: cartData });
  } catch (error) {
    dispatch({
      type: CART_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProductToCart = (new_cart_item) => async (dispatch) => {
  try {
    dispatch({
      type: CART_ITEM_ADD_REQUEST,
    });

    // Combine the product ID and the unique identifier
    const newItemId = `${new_cart_item.id}`;

    const cartItemRef = doc(db, "cartItems", newItemId);

    const docSnap = await getDoc(cartItemRef);

    if (docSnap.exists()) {
      const existingItem = docSnap.data();
      if (existingItem.qtyInCart < 3) {
        // If the quantity is less than 3, update the quantity
        const updatedQty = existingItem.qtyInCart + 1;
        await updateDoc(cartItemRef, { qtyInCart: updatedQty });

        dispatch(
          showSuccessAlert(
            `${new_cart_item.name} Icecream quantity updated to ${updatedQty}`
          )
        );

        dispatch({
          type: CART_ITEM_ADD_SUCCESS,
          payload: { ...existingItem, qtyInCart: updatedQty },
        });
      } else {
        // If the quantity is already 3, show an alert
        dispatch(
          showErrorAlert(`${existingItem.name} already at max quantity`)
        );
        dispatch({
          type: CART_ITEM_ADD_SUCCESS,
          payload: existingItem,
        });
      }
    } else {
      console.log("No such document!");
      const cartItemData = {
        id: newItemId,
        name: new_cart_item.name || "",
        ingredients: new_cart_item.ingredients || "",
        price: new_cart_item.price || 0,
        containsNuts: new_cart_item.containsNuts || false,
        image: new_cart_item.image || "",
        qtyInCart: 1,
      };
      await setDoc(doc(db, "cartItems", newItemId), cartItemData);

      dispatch(
        showSuccessAlert(
          `${new_cart_item.name} Icecream was successfully added to the cart!`
        )
      );

      dispatch({
        type: CART_ITEM_ADD_SUCCESS,
        payload: cartItemData,
      });
    }
  } catch (error) {
    dispatch(showErrorAlert(`Failed To Add ${new_cart_item.name} ${error}`));
    dispatch({
      type: CART_ITEM_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateCartQty = (cart_item_id, qty) => async (dispatch) => {
  try {
    dispatch({
      type: CART_ITEM_UPDATE_REQUEST,
    });

    await updateDoc(doc(db, "cartItems", cart_item_id), {
      qtyInCart: qty,
    });

    dispatch({
      type: CART_ITEM_UPDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CART_ITEM_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteItemFromCart = (cart_item_name) => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEM_REMOVE_REQUEST });

    await deleteDoc(doc(db, "cartItems", cart_item_name));

    dispatch(showErrorAlert(`Item has been removed from the cart`));

    dispatch({ type: CART_ITEM_REMOVE_SUCCESS });
  } catch (error) {
    dispatch({
      type: CART_ITEM_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
