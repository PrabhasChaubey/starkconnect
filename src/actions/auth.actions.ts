"use server";

import { redis } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function checkAuthStatus(){
    const {getUser }= getKindeServerSession();
    const user = await getUser();

    if(!user) return {success:false};

    const userId = `user:${user.id}`;

    const existingUser = await redis.hgetall(userId);

    if(!existingUser || Object.keys(existingUser).length === 0){
        const imgIsNull= user.picture?.includes("gravatar");
        const image = imgIsNull ? "" : user.picture;

        const safeId = user.id ?? "";
const safeEmail = user.email ?? "";
const safeGivenName = user.given_name ?? "";
const safeFamilyName = user.family_name ?? "";
const safeName = `${safeGivenName} ${safeFamilyName}`.trim();
const safeImage = image ?? "";

await redis.hset(userId, {
    id: safeId,
    email: safeEmail,
    name: safeName,
    image: safeImage,
});

    }

    return {success: true};
}