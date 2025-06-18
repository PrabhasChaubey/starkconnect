import PusherServer from "pusher";
import PusherClient from "pusher-js";

/* eslint-disable no-var */
declare global {
  interface Global {
    _pusherServer?: PusherServer;
    _pusherClient?: PusherClient;
  }


  var _pusherServer: PusherServer | undefined;
  var _pusherClient: PusherClient | undefined;
}
/* eslint-disable no-var */


export const pusherServer =
  globalThis._pusherServer ??= new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.PUSHER_APP_KEY!,
    secret: process.env.PUSHER_APP_SECRET!,
    cluster: "ap2",
    useTLS: true,
  });

export const pusherClient =
  globalThis._pusherClient ??= new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
    cluster: "ap2",
  });
