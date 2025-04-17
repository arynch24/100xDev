import axios from 'axios'
import { atom, selector } from 'recoil'


export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get("http://localhost:3000/notifications");
      return res.data;
    }
  })
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    if (!allNotifications) return 0;

    return allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
  }
})



// import { atom, selector } from 'recoil';


// export const networkAtom = atom({
//   key: "networkAtom",
//   default: data.network
// })
// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: data.jobs
// })
// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: data.messaging
// })
// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default:  data.notification
// })

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const networkCount = get(networkAtom);
//     const jobsCount = get(jobsAtom);
//     const notification = get(notificationAtom);
//     const messagingCount = get(messagingAtom);

//     return networkCount + jobsCount + notification + messagingCount;
//   }
// })