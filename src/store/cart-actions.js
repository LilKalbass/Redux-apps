import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return (dispatch) => {
        fetch("https://redux-shoppin-cart-default-rtdb.firebaseio.com/cartItems.json")
            .then((res) => res.json())
            .then((result) => {
                dispatch(cartActions.replaceData(result))
                console.log(result)
            })
            .catch((err) => {
                dispatch(
                    uiActions.showNotification({
                        open: true,
                        message: "fetching from DB failed",
                        type: "error",
                    })
                );
            })
    };
};

export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending Request To Database!",
                type: "warning",
            })
        );
        fetch("https://redux-shoppin-cart-default-rtdb.firebaseio.com/cartItems.json", {
            method: "PUT",
            body: JSON.stringify(cart)
        })
            .then((res) => {
                 // console.log(res);
                return res.json()

            })
            .then((result) => {
                dispatch(uiActions.showNotification({
                    open: true,
                    message: "Success",
                    type: "success"
                }))
                console.log(result);
            })
            .catch((err) => {
                dispatch(uiActions.showNotification({
                    open: true,
                    message: "Fail",
                    type: "error"
                }))
                // console.log(err);
            })
    }
}