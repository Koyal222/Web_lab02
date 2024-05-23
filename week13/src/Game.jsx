import React, { useState } from "react";

export default function StepsGame() {
  const [users, setUsers] = useState([]);

  const goForward = (index) => {
    const updatedData = [...users];
    if (updatedData[index].step < 3) {
      updatedData[index].step += 1;
      setUsers(updatedData);
    }
  };

  const goBack = (index) => {
    const updatedData = [...users];
    if (updatedData[index].step > 1) {
      updatedData[index].step -= 1;
      setUsers(updatedData);
    }
  };

  const createUser = () => {
    setUsers((prev) => [
      ...prev,
      {
        userName: user-${prev.length + 1},
        step: 1,
      },
    ]);
  };

  return (
    <div className="container">
      <div>
        <button onClick={createUser}>Create User</button>
      </div>
      <div>
        {users.map((userItem, index) => (
          <div key={index} style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <div>{userItem.userName}</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {[1, 2, 3].map((step) => (
                <button
                  key={step}
                  style={{
                    backgroundColor: userItem.step === step ? "#006400" : "white",
                    color: userItem.step === step ? "white" : "black",
                  }}
                  disabled={userItem.step !== step} // Simplified disable condition
                  aria-disabled={userItem.step !== step} // Accessibility improvement
                >
                  Step {step}
                </button>
              ))}
            </div>
            <div>
              <button onClick={() => goBack(index)} disabled={userItem.step === 1} aria-disabled={userItem.step === 1}>
                Previous
              </button>
              <button onClick={() => goForward(index)}>Forward</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}