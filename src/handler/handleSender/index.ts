import {saveUser} from './saveUser';

const handleSender = async (senderId: string) => {
    await saveUser(senderId);
};

export default handleSender;
