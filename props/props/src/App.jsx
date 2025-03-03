// Challenge 1: Profile Card Component
// 📌 Scenario: You’re building a social media platform. Create a ProfileCard component that receives user details via props.
// ✅ Props to handle: name, age, location, avatarURL, isOnline.
// ✅ Bonus: Display an "Online" badge dynamically when isOnline is true.

function ProfileCard({ name, age, location, avatarURL, isOnline }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#2c3e50",
        borderRadius: 10,
        textAlign: "center",
        width: 300,
        color: "white",
        position: "relative",
      }}
      className="ProfileCard"
    >

      <img
        style={{
          height: 80,
          width: 80,
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid white",
        }}
        src={avatarURL}
        alt={`${name}'s avatar`}
      />

      <h2 style={{ margin: "10px 0" }}>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>

      {isOnline && (
        <span
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "green",
            color: "white",
            padding: "5px 10px",
            borderRadius: 10,
            fontSize: 12,
          }}
        >
          Online
        </span>
      )}
    </div>
  );
}

function App() {
  return (
    <ProfileCard
      name="Inesh"
      age={28}
      location="India"
      avatarURL="https://as2.ftcdn.net/v2/jpg/02/66/72/41/1000_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
      isOnline={true}
    />
  );
}

export default App;

