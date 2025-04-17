import { useRecoilValue } from "recoil"
// import { jobsAtom, networkAtom, notificationAtom, messagingAtom, totalNotificationSelector } from "../store/atoms"
// import { useMemo } from "react";
import { notifications, totalNotificationSelector } from "../store/atoms";

export default function Nav() {
    const allNetworkNotifications = useRecoilValue(notifications);

    //we need to show total counts on our me button

    //approach can can use useMemo lets see
    // const totalNotificationCount = useMemo(() => {
    //     return parseInt(finalValue) + parseInt(jobsCount) + parseInt(messageCount) + parseInt(notificationCount);
    // },[finalValue,messageCount,jobsCount,notificationCount])


    //or we can use selectors provided by recoil
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    return (
        <>
            <button>Home</button>
            <button>My Network({allNetworkNotifications.network})</button>
            <button>Jobs ({allNetworkNotifications.jobs})</button>
            <button>Messaging({allNetworkNotifications.messaging})</button>
            <button>Notifications({allNetworkNotifications.notifications})</button>
            <button>Me ({totalNotificationCount})</button>
        </>
    )
}