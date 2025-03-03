### 🔥 **Real-World Challenges for Props**  

#### **Challenge 1: Profile Card Component**  
📌 **Scenario:** You’re building a social media platform. Create a **ProfileCard** component that receives user details via props.  
✅ **Props to handle:** `name`, `age`, `location`, `avatarURL`, `isOnline`.  
✅ **Bonus:** Display an "Online" badge dynamically when `isOnline` is `true`.  

---

#### **Challenge 2: Dynamic Alert Component**  
📌 **Scenario:** Your app needs a reusable alert system. Create an **AlertBox** that accepts the following props:  
✅ **Props:** `message`, `type` (`success`, `error`, `warning`), and `dismissible`.  
✅ **Bonus:** Style the alert differently based on `type` and allow it to close when `dismissible` is `true`.  

---

#### **Challenge 3: Button Variants**  
📌 **Scenario:** Your team needs a **Button** component that supports multiple styles.  
✅ **Props:** `label`, `variant` (`primary`, `secondary`, `danger`), `size` (`small`, `medium`, `large`), `onClick`.  
✅ **Bonus:** Add conditional CSS to apply styles based on `variant` and `size`.  

---

#### **Challenge 4: Product List Component**  
📌 **Scenario:** You’re developing an e-commerce site. Build a **ProductList** component that renders an array of products using **props**.  
✅ **Props:** An array of objects, each with `id`, `title`, `price`, and `imageURL`.  
✅ **Bonus:** Render a “SALE” badge for products under $10.  

---

#### **Challenge 5: Blog Post Preview**  
📌 **Scenario:** You need a **BlogPreview** component to show an article summary.  
✅ **Props:** `title`, `excerpt`, `author`, `date`, `isFeatured`.  
✅ **Bonus:** Apply a special style if `isFeatured` is `true`.  

---

🔥 **Advanced Challenge:** Convert one of the above challenges into a **Higher-Order Component (HOC)** or **Render Props** pattern to make it even more reusable.  
