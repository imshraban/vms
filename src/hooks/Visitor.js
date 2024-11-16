import { useState, useEffect } from "react";
import VisitorEntity from "../api/visitorEntity";

export const useVisitorData = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const data = await VisitorEntity.getAllVisitor();
        if (data.success) {
          setVisitors(data.data); 
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchVisitorData();
  }, []);

  return { visitors };
};
