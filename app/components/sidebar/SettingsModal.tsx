'use client';

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface SettingsModalProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen,
    onClose,
    currentUser
}) => {
    const router = useRouter();

    return ( 
        <div>
            Setting Model
        </div>
     );
}
 
export default SettingsModal;