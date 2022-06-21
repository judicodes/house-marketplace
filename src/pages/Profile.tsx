import { useEffect, useState } from "react";
import { auth } from "../firebase.config";

function Profile() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? <h1>{user.displayName}</h1> : <h1>Not logged in</h1>;
}

export default Profile;
