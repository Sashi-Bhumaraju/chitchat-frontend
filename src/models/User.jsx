class User {
    constructor( uid, name, email, photoUrl, created_at ) {
      this.user_id = uid;
      this.username = name;
      this.email = email;
      this.photo_url = photoUrl;
      this.created_at = created_at;
    }
  }

  export default User;
  