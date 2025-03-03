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
🔴 **Advanced Challenges**

#### **6️⃣ Configurable Card Component**
📌 **Scenario:** You're building a UI library. Create a Card component that supports multiple layouts using props.
✅ **Props to handle:** `title`, `content`, `imageURL`, `layout` (`horizontal`, `vertical`).
✅ **Bonus:** If `layout` is `horizontal`, show the image on the left; if `vertical`, place it on top.

---

#### **7️⃣ Context-Aware Theme Toggle**
📌 **Scenario:** Create a **ThemeButton** component that accepts a theme prop (`light` or `dark`).
✅ **Props to handle:** `theme` (`light`/`dark`), `onToggle` (function).
✅ **Bonus:** When clicked, it should toggle the theme dynamically.

---

#### **8️⃣ Controlled vs. Uncontrolled Input**
📌 **Scenario:** Build a **TextInput** component that supports both controlled and uncontrolled modes.
✅ **Props to handle:** `value` (controlled mode), `defaultValue` (uncontrolled mode), `onChange`.
✅ **Bonus:** If `value` is provided, make it controlled; otherwise, treat it as uncontrolled.

---

#### **9️⃣ Form Submission Component**
📌 **Scenario:** Create a **Form** component that takes form fields as props and handles submission.
✅ **Props to handle:** `fields` (array of field objects: `{name, type, label}`), `onSubmit` (callback function).
✅ **Bonus:** Validate required fields and disable submit if empty.

---

#### **🔟 Table Component with Sorting**
📌 **Scenario:** Build a **DataTable** component that receives data as props and allows sorting.
✅ **Props to handle:** `columns` (array of column names), `data` (array of objects).
✅ **Bonus:** Clicking a column should sort the table in ascending/descending order.

---

#### **1️⃣1️⃣ Multi-Variant Modal Component**
📌 **Scenario:** Design a **Modal** component that can be used for different purposes (`alerts`, `forms`, `confirmations`).
✅ **Props to handle:** `title`, `content`, `isOpen`, `onClose`, `variant` (`alert`, `form`, `confirmation`).
✅ **Bonus:** Use different styles and animations based on `variant`.

---

#### **1️⃣2️⃣ Debounced Search Component**
📌 **Scenario:** Create a **SearchInput** component that accepts an `onSearch` prop and waits for the user to stop typing before making a request.
✅ **Props to handle:** `placeholder`, `onSearch` (function), `delay` (debounce time in ms).
✅ **Bonus:** Use debouncing to prevent excessive API calls.

---

#### **1️⃣3️⃣ Configurable Tooltip Component**
📌 **Scenario:** Build a **Tooltip** component that displays text when hovering over an element.
✅ **Props to handle:** `text`, `position` (`top`, `bottom`, `left`, `right`).
✅ **Bonus:** Add animations and delay for a smooth effect.

---

#### **1️⃣4️⃣ Dynamic Sidebar Component**
📌 **Scenario:** Create a **Sidebar** component that accepts navigation links dynamically.
✅ **Props to handle:** `links` (array of `{ name, url, icon }` objects), `isOpen` (boolean).
✅ **Bonus:** Animate opening/closing and allow customizing icons.

---

#### **1️⃣5️⃣ Feature Flags with Props**
📌 **Scenario:** You're working on a large project where some features need to be conditionally rendered based on props.
✅ **Props to handle:** `featureFlags` (object containing boolean flags).
✅ **Bonus:** Render different UI elements based on feature flags.
