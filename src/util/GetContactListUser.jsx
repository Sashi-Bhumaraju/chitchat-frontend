import DateTimeFormatter from "./DateTimeFormatter";
import { LocalStorageGet } from "./LocalStorage";

const GetContactListUser = (data) => {
    const user = LocalStorageGet("chitchat.user");
    const sufixCharacter = user.user_id === data.user_id_1 ? '2' : '1';
    const user_id = "user_id_" + sufixCharacter;
    const username = "username_" + sufixCharacter;
    const photo_url = "photo_url_" + sufixCharacter;
    const contact = {
      user_id: data[user_id],
      username: data[username],
      photo_url: data[photo_url],
      content: data.recent_content,
      timestamp: DateTimeFormatter(data.timestamp)
    };
    return contact;
  };

export { GetContactListUser }  ;