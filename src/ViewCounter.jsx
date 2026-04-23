import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";

export default function ViewCounter() {
  const [views, setViews] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const counted = localStorage.getItem("portfolio_view");

    const updateViews = async () => {
      const ref = doc(db, "portfolio", "views");

      const snap = await getDoc(ref);

      // 👉 IF document NOT exist → CREATE it
      if (!snap.exists()) {
        await setDoc(ref, { count: 0 });
      }

      // Increase only once per device
      if (!counted) {
        await updateDoc(ref, {
          count: increment(1),
        });

        localStorage.setItem("portfolio_view", "true");
      }

      // Read latest value
      const latest = await getDoc(ref);
      setViews(latest.data().count);
    };

    updateViews();
  }, []);

  return (
    <div>
      <span>{views}</span>
    
    </div>

  );
}
