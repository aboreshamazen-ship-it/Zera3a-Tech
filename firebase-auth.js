// ================= Firebase =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCg8ej80A4VnHFK2iuXx4nhEt9Wtmf4ulU",
  authDomain: "smart-farm-8d3f5.firebaseapp.com",
  projectId: "smart-farm-8d3f5",
  storageBucket: "smart-farm-8d3f5.appspot.com",
  messagingSenderId: "317371842198",
  appId: "1:317371842198:web:4765ea8c0036ae64b10cb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Default role
let selectedRole = "farmer";

// ================= Role Tabs =================
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (idx === 0) selectedRole = "farmer";
    else if (idx === 1) selectedRole = "consumer";
    else selectedRole = "investor";
  });
});

// ================= SIGN UP =================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData.entries());
    data.role = selectedRole;

    if (data.password !== data.confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      return;
    }

    try {
      // إنشاء المستخدم في Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      // حفظ بيانات المستخدم في Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        governorate: data.governorate,
        address: data.address,
        role: data.role,
        createdAt: serverTimestamp()
      });

      alert("تم إنشاء الحساب بنجاح!");
      signupForm.reset();
      window.location.href = "signin.html";

    } catch (error) {
      console.error("Error:", error);
      if (error.code === "auth/email-already-in-use") {
        alert("هذا الإيميل مستخدم بالفعل. حاول تسجيل الدخول");
      } else {
        alert("حدث خطأ: " + error.message);
      }
    }
  });
}

// ================= SIGN IN =================
const signinForm = document.getElementById("signinForm");
if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signinForm.querySelector('input[type="email"]').value;
    const password = signinForm.querySelector('input[type="password"]').value;

    try {
      // تسجيل الدخول عبر Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // جلب بيانات المستخدم من Firestore
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();

        // التحقق من الدور
        if (userData.role !== selectedRole) {
          alert(`خطأ: هذا الحساب ليس ${selectedRole}`);
          return;
        }

        alert(`تم تسجيل الدخول بنجاح! مرحبًا ${userData.fullName}`);
        console.log("User data:", userData);

        // تحويل المستخدم لصفحة رئيسية أو لوحة تحكم حسب الدور
        window.location.href = "dashboard.html"; 
      } else {
        alert("لم يتم العثور على بيانات المستخدم في Firestore");
      }

    } catch (error) {
      console.error(error);
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        alert("الإيميل أو كلمة المرور غير صحيحة");
      } else {
        alert("حدث خطأ: " + error.message);
      }
    }
  });
}
  