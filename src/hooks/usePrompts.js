import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export function usePrompts() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "prompts"));
      
          if (querySnapshot.empty) {
            console.log("No documents found in 'prompts' collection.");
          }
      
          const promptsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          setPrompts(promptsData);
        } catch (error) {
          console.error("Error fetching prompts:", error);
        } finally {
          setLoading(false);
        }
      };

    fetchPrompts();
  }, []);

  return { prompts, loading };
}
