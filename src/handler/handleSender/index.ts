import {saveUser} from './saveUser';

const handleSender = (senderId: string) => {
    saveUser(senderId);
};

export default handleSender;
