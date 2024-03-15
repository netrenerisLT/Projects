"use client";
import addData from "@/firebase/addData";


export default function GetData() {
  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <p className="textH2" onClick={handleForm}>
        HI
      </p>
    </div>
  );
}
