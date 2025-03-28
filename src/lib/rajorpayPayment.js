"use client";
import { toast } from "react-toastify";

const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const handleClick = async (plansId) => {

    // Load Razorpay script if not already loaded
    const isLoaded = await loadRazorpay();
    if (!isLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // Create order
    const response = await fetch("/api/v1/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan: plansId }),
    });
    const res = await response.json();
    if (!response.ok) {
        toast.error(res.message)
        return;
    }
    const { data: { order } } = res;

    // Fetch Razorpay key
    const response2 = await fetch("/api/v1/order/get-key");
    const { data } = await response2.json();
    const key_id = data?.key;


    const options = {
        key: key_id,
        amount: order.inr_price,
        currency: "INR",
        name: "Ravallusion",
        description: "This is the test transaction",
        order_id: order.order_id,
        callback_url: "/api/v1/order/verify-payment",
        theme: {
            color: "#C99BFD",
        },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
};