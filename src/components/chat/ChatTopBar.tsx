
import { useSelectedUser } from "@/store/useSelectedUser";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Info, X } from "lucide-react";


const ChatTopBar = () => {
  const {selectedUser,setSelectedUser}=useSelectedUser();

  return (
    <div className='w-full h-20 flex p-4 justify-between items-center border-b'>
      <div className='flex items-center gap-2'>
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser?.image || "/user-placeholder.png"}
            alt="User Image"
            className="w-10 h-10 object-cover rounded-full"
          />
        </Avatar>
        <span className="font-medium">{selectedUser?.name}</span>
      </div>

      <div className="flex gap-2">
        <Info className="text-muted-foreground cursor-pointer hover:text-primary" />
        <X 
          className="text-muted-foreground cursor-pointer hover:text-primary" 
          onClick={()=>setSelectedUser(null)}
        />
      </div>
    </div>
  );
};

export default ChatTopBar;
